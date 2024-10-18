from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app.models import Gym

# Create a session
db: Session = SessionLocal()

# Dummy gyms data
dummy_gyms = [
    {"name": "Fitbee Fitness", "location": "Alpha 1-Greater Noida", "price": 40, "rating": 5},
    {"name": "Muscle Arena", "location": "Sector 50-Noida", "price": 35, "rating": 4},
    {"name": "Flex Gym", "location": "Connaught Place-Delhi", "price": 50, "rating": 4},
    {"name": "Iron Temple", "location": "Rajouri Garden-Delhi", "price": 45, "rating": 4},
    {"name": "Power House Gym", "location": "Indirapuram-Ghaziabad", "price": 30, "rating": 3},
]

# Populate gyms
for gym in dummy_gyms:
    db_gym = Gym(name=gym['name'], location=gym['location'], price=gym['price'], rating=gym['rating'])
    db.add(db_gym)

# Commit to save the gyms
db.commit()

# Close the session
db.close()
