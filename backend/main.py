from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/get_trivias", response_model=[models.Trivia])
async def submit(search: schemas.Search, db: Session = Depends(get_db)):
    return crud.get_trivias(search, db)