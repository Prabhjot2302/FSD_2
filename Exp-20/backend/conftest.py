import os

# Tests always use an isolated in-memory DB (not overridden by .env defaults).
os.environ["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
