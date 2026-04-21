from flask import Flask
from routes.student_routes import student_bp
import os

def create_app():
    app = Flask(__name__)

    app.register_blueprint(student_bp)

    return app

app = create_app()

@app.route("/")
def home():
    return {"message": "Backend Server is running"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)