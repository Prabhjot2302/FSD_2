# EXP-11: Microservices using Flask

## 📌 Objective

To design and implement a simple microservices architecture using Flask, where Customer Service communicates with Order Service.

---

## 🏗️ Project Structure

```
EXP-11/
│
├── micro-services-lab/
│   ├── customer-service/
│   │   └── customer_app.py
│   │
│   └── order_service/
│       └── order_app.py
│
└── requirements.txt
```

---

## ⚙️ Technologies Used

* Python
* Flask
* Requests Library

---

## 🚀 How to Run Locally

### Step 1: Create Virtual Environment

```
python -m venv .venv
.venv\Scripts\activate
```

### Step 2: Install Dependencies

```
pip install -r requirements.txt
```

### Step 3: Run Order Service

```
cd micro-services-lab/order_service
python order_app.py
```

### Step 4: Run Customer Service (New Terminal)

```
cd micro-services-lab/customer-service
python customer_app.py
```

---

## 🔗 API Endpoints

### 1. Get Customer with Orders

```
GET /customers/<user_id>/orders
```

### 2. Get Orders by User

```
GET /orders/user/<user_id>
```

### 3. Update Order Status

```
PUT /orders/<order_id>/status
```

---

## ☁️ Deployment (Render)

* Deploy both services separately on Render
* Update Customer Service URL with deployed Order Service URL

---

## 🎯 Output

* Successfully fetched customer details with their orders
* Demonstrated communication between microservices

---

## 📖 Conclusion

This experiment demonstrates how multiple services can interact with each other in a microservices architecture using REST APIs.
