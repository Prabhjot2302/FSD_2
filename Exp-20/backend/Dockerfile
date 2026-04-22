# Test stage
FROM python:3.10 as test

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run tests with coverage
RUN pytest -v --cov=. --cov-report=xml --cov-report=html --cov-report=term-missing

# Production stage
FROM python:3.10

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

EXPOSE 5000

CMD ["python", "run.py"]