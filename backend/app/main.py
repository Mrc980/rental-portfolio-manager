from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app import models, schemas

app = FastAPI()
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "Rental Portfolio API"}


@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/properties", response_model=list[schemas.PropertyResponse])
def get_properties(db: Session = Depends(get_db)):
    return db.query(models.Property).all()


@app.post("/properties", response_model=schemas.PropertyResponse, status_code=201)
def create_property(property: schemas.PropertyCreate, db: Session = Depends(get_db)):
    new_property = models.Property(**property.model_dump())

    db.add(new_property)
    db.commit()
    db.refresh(new_property)

    return new_property