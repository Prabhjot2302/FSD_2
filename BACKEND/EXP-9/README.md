# EXP-9 Authentication using Flask

## Aim

To learn and implement different type of authentication methods in flask API like Basic Auth, Token Auth and JWT Auth.

## Description

In this experiment we created a simple flask backend application which show how authentication works in APIs. Authentication is important because it verify the user before giving access to protected routes.

We implemented three authentication methods in this experiment.

1. Basic Authentication
2. Simple Token Authentication
3. JWT Authentication

We tested all the APIs using Postman.

## Authentication Methods

### 1. Basic Authentication

In this method username and password is send with request. Server checks the credentials and if it is correct then user can access the route.

Route used:

```
/basic-protected
```

### 2. Simple Token Authentication

In this method user first login and server generate a simple token. This token must be send in header to access protected route.

Routes used:

```
/token-login
/token-protected
```

### 3. JWT Authentication

In this method JSON Web Token is generated after login. This token is more secure and used in many real world applications.

Routes used:

```
/jwt-login
/jwt-protected
```

## How to Run the Project

Step 1: create virtual environment

```
python -m venv venv
```

Step 2: activate the environment

```
venv\Scripts\activate
```

Step 3: install dependencies

```
pip install -r requirements.txt
```

Step 4: run the flask application

```
python app.py
```

The server will run on:

```
http://localhost:5000
```

## Testing

All API routes are tested using Postman and screenshots are taken for submission.

## Result

Successfully implemented basic authentication, token authentication and JWT authentication using flask API.
