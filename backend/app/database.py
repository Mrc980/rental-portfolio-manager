import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

db_url = URL.create(
    "postgresql+psycopg2",
    username=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=int(os.getenv("DB_PORT", "5432")),
    database=os.getenv("DB_NAME")
)

engine = create_engine(db_url)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()