from sqlalchemy import Column, Integer, String
from .database import Base

class Gym(Base):
    __tablename__ = "gyms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String, index=True)
    price = Column(Integer)
    rating = Column(Integer)
