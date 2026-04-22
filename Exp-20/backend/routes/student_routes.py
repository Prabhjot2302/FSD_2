from flask import Blueprint, request, jsonify

from extensions import db
from models import Student

student_bp = Blueprint("students", __name__)


@student_bp.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    student = Student(
        name=data["name"],
        age=data.get("age"),
        course=data.get("course", "N/A"),
        gender=data.get("gender", "N/A"),
    )
    db.session.add(student)
    db.session.commit()

    return jsonify(student.to_dict()), 201


@student_bp.route("/students", methods=["GET"])
def get_students():
    rows = Student.query.order_by(Student.id).all()
    return jsonify([s.to_dict() for s in rows]), 200


@student_bp.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = db.session.get(Student, student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student.to_dict()), 200


@student_bp.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json() or {}
    student = db.session.get(Student, student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    student.name = data.get("name", student.name)
    student.age = data.get("age", student.age)
    student.course = data.get("course", student.course)
    student.gender = data.get("gender", student.gender)
    db.session.commit()

    return jsonify(student.to_dict()), 200


@student_bp.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    student = db.session.get(Student, student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    db.session.delete(student)
    db.session.commit()

    return jsonify({"message": "Deleted successfully"}), 200
