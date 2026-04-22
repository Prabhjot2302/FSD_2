from flask import Flask
from flask_cors import CORS
from routes.student_routes import student_bp
# from middleware.logger import register_middlewares

def create_app():
    app = Flask(__name__)
    
    # Enable CORS for all routes
    CORS(app, origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:5000"], 
         methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
         allow_headers=["Content-Type"])

    # Register Blueprints
    app.register_blueprint(student_bp)

    # Register Middlewares
    # register_middlewares(app)

    return app

app = create_app()

@app.route("/")
def home():
    return {"message": "Backend Server is running"}