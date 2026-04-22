import os
from pathlib import Path
from urllib.parse import quote_plus

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from extensions import db
from routes.student_routes import student_bp


def _database_uri() -> str:
    explicit = os.getenv("SQLALCHEMY_DATABASE_URI", "").strip()
    if explicit:
        return explicit

    user = (
        os.getenv("DB_USER", "").strip()
        or os.getenv("SQL_USERNAME", "").strip()
    )
    password = os.getenv("DB_PASSWORD", "") or os.getenv("SQL_PASSWORD", "")
    host = os.getenv("DB_HOST", "").strip()
    port = os.getenv("DB_PORT", "3306").strip()
    name = os.getenv("DB_NAME", "").strip()
    driver = os.getenv("DB_DRIVER", "mysql+pymysql").strip()

    if user and host and name:
        user_enc = quote_plus(user)
        if password:
            pass_enc = quote_plus(password)
            auth = f"{user_enc}:{pass_enc}@"
        else:
            auth = f"{user_enc}@"
        return f"{driver}://{auth}{host}:{port}/{name}"

    return "sqlite:///students.db"


def create_app(config_overrides=None):
    load_dotenv(Path(__file__).resolve().parent / ".env")

    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = _database_uri()
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    if config_overrides:
        app.config.update(config_overrides)

    cors_origins = os.getenv("CORS_ORIGINS", "*").strip() or "*"
    if cors_origins == "*":
        CORS(app)
    else:
        origins = [origin.strip() for origin in cors_origins.split(",") if origin.strip()]
        CORS(app, origins=origins)

    uri = app.config["SQLALCHEMY_DATABASE_URI"]
    if uri.startswith("sqlite"):
        opts: dict = {"connect_args": {"check_same_thread": False}}
        if ":memory:" in uri:
            from sqlalchemy.pool import StaticPool

            opts["poolclass"] = StaticPool
        app.config["SQLALCHEMY_ENGINE_OPTIONS"] = opts

    db.init_app(app)

    import models  # noqa: F401 — register models with SQLAlchemy metadata

    with app.app_context():
        db.create_all()

    app.register_blueprint(student_bp)

    @app.route("/")
    def home():
        return {"status": "success", "message": "Backend Server is running"}

    return app


app = create_app()
