from fastapi import FastAPI
from app.database import Base, engine
from app import models

app = FastAPI()
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "Rental Portfolio API"}


@app.get("/health")
def health():
    return {"status": "ok"}