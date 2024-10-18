from pydantic import BaseModel

class GymBase(BaseModel):
    name: str
    location: str
    price: int
    rating: int

class GymCreate(GymBase):
    pass

class Gym(GymBase):
    id: int

    class Config:
        orm_mode = True

# Define the UserLogin schema
class UserLogin(BaseModel):
    username: str
    password: str

# Define the UserCreate schema for signup
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

# Define the User schema (response model)
class User(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        orm_mode = True

# Define the Token schema for the response of login
class Token(BaseModel):
    access_token: str
    token_type: str

