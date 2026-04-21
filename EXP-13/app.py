from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="vyr@1",   # your password
    database="college"
)

cursor = db.cursor(dictionary=True)

@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    cursor.execute("INSERT INTO student (name) VALUES (%s)", (data["name"],))
    db.commit()
    return jsonify({"id": cursor.lastrowid, "name": data["name"]}), 201

@app.route("/students", methods=["GET"])
def get_students():
    cursor.execute("SELECT * FROM student")
    return jsonify(cursor.fetchall()), 200

@app.route("/students/<int:id>", methods=["GET"])
def get_student(id):
    cursor.execute("SELECT * FROM student WHERE id=%s", (id,))
    student = cursor.fetchone()
    if student:
        return jsonify(student)
    return {"error": "Not found"}, 404

@app.route("/students/<int:id>", methods=["PUT"])
def update_student(id):
    data = request.get_json()
    cursor.execute("UPDATE student SET name=%s WHERE id=%s", (data["name"], id))
    db.commit()
    return jsonify({"id": id, "name": data["name"]})

@app.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    cursor.execute("DELETE FROM student WHERE id=%s", (id,))
    db.commit()
    return {"message": "Deleted"}, 200

if __name__ == "__main__":
    app.run(debug=True)