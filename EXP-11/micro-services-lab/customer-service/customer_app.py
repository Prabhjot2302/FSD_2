from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"}
}

# REPLACE THIS AFTER DEPLOYING ORDER SERVICE
ORDER_SERVICE_URL = "https://exp-11-order-service.onrender.com"
@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})

@app.route("/customers/<int:user_id>/orders")
def get_customer_orders(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    try:
        response = requests.get(
            f"{ORDER_SERVICE_URL}/orders/user/{user_id}",
            timeout=5
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []
    except:
        orders = []

    return jsonify({
        "customer": customer,
        "orders": orders
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)