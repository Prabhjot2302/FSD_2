import pytest
from app import app

## Dependencies:
# pytest: A testing framework for Python.
# pytest-cov: A plugin for pytest that provides coverage reports.

## To run the tests, use the following commands in the terminal:
# pytest -v
# pytest test_app.py
# pytest test_app.py::test_create_student

# To check code coverage, use the following command:
# pytest --cov=app --cov-report=term-missing --cov-report=html

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

def test_create_student(client):
    response = client.post("/students", json={
        "name": "Student-1",
        "course": "Computer Science",
        "gender": "Male"
    })
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"

def test_get_students(client):
    response = client.get("/students")
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_get_student(client):
    # First, create a student to ensure there is one to retrieve
    create_response = client.post("/students", json={
        "name": "Student-2",
        "course": "Computer Science",
        "gender": "Female"
    })
    student_id = create_response.json["id"]

    # Now, retrieve the student by ID
    response = client.get(f"/students/{student_id}")
    assert response.status_code == 200
    assert response.json["name"] == "Student-2"

def test_update_student(client):
    # First, create a student to ensure there is one to update
    create_response = client.post("/students", json={
        "name": "Student-3",
        "course": "Computer Science",
        "gender": "Other"
    })
    student_id = create_response.json["id"]

    # Now, update the student's name
    response = client.put(f"/students/{student_id}", json={"name": "Student-3 Updated"})
    assert response.status_code == 200
    assert response.json["name"] == "Student-3 Updated"

def test_delete_student(client):
    # First, create a student to ensure there is one to delete
    create_response = client.post("/students", json={
        "name": "Student-4",
        "course": "Computer Science",
        "gender": "Male"
    })
    student_id = create_response.json["id"]

    # Now, delete the student
    response = client.delete(f"/students/{student_id}")
    assert response.status_code == 200

    # Verify the student has been deleted
    get_response = client.get(f"/students/{student_id}")
    assert get_response.status_code == 404

def test_home(client):
    create_response = client.get("/")
    assert create_response.status_code == 200
    assert create_response.json["message"] == "Backend Server is running"   