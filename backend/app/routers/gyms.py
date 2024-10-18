from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List  # Import List here
from .. import models, schemas, database

router = APIRouter()

@router.get("/gyms", response_model=List[schemas.Gym])
def get_gyms(db: Session = Depends(database.get_db)):
    return db.query(models.Gym).all()

@router.post("/gyms", response_model=schemas.Gym)
def create_gym(gym: schemas.GymCreate, db: Session = Depends(database.get_db)):
    db_gym = models.Gym(**gym.dict())
    db.add(db_gym)
    db.commit()
    db.refresh(db_gym)
    return db_gym
