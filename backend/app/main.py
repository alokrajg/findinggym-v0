from fastapi import FastAPI
from .database import engine, Base
from .routers import gyms, auth

# Recreate the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(gyms.router)
app.include_router(auth.router)
