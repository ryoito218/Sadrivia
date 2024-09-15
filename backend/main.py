from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List
from . import models, schemas, crud
from .database import SessionLocal, engine
from typing import Optional

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/get_trivias", response_model=List[schemas.Trivia])
async def get_trivias(keyword: Optional[str] = None, category: Optional[str] = None, language: Optional[str] = None, db: Session = Depends(get_db)):
    return crud.get_trivias(db, keyword, category, language)