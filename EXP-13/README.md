# Experiment 13 – Flask CRUD with MySQL

## Aim

To develop a backend server using Flask and connect it with a MySQL database to perform CRUD (Create, Read, Update, Delete) operations with validations.

---

## Technologies Used

* Python (Flask)
* MySQL
* Postman
* Pytest

---

## Project Structure

```
EXP-13/
│
├── app.py
├── test_app.py
├── requirements.txt
├── README.md
├── screenshots/
```

---

## Database Setup

1. Open MySQL Workbench
2. Run the following queries:

```
CREATE DATABASE college;

USE college;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
```

---

## How to Run

### Step 1: Create Virtual Environment

```
python -m venv venv
venv\Scripts\activate
```

### Step 2: Install Dependencies

```
pip install -r requirements.txt
```

### Step 3: Run Flask App

```
python app.py
```

Server will start at:

```
http://127.0.0.1:5000
```

---

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /students      | Create student    |
| GET    | /students      | Get all students  |
| GET    | /students/{id} | Get student by ID |
| PUT    | /students/{id} | Update student    |
| DELETE | /students/{id} | Delete student    |

---

## Testing

### Pytest

```
pytest -v
```

### Postman

* Tested all CRUD APIs
* Verified responses and status codes

---

## Results

* Successfully connected Flask backend with MySQL database
* Implemented all CRUD operations
* APIs tested using Postman
* Test cases executed successfully using Pytest

---

## Conclusion

This experiment demonstrates how to build a backend application using Flask, integrate it with a MySQL database, and perform CRUD operations efficiently with proper testing.

---
