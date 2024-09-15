from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from . import models, schemas, crud
from .database import SessionLocal, engine
from typing import Optional

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/get_trivias", response_model=List[schemas.Trivia])
async def get_trivias(keyword: Optional[str] = None, category: Optional[str] = None, language: Optional[str] = None, db: Session = Depends(get_db)):
    return crud.get_trivias(db, keyword, category, language)

@app.get("/get_trivia/{id}", response_model=schemas.Trivia)
async def get_trivia(id: int, db: Session = Depends(get_db)):
    return crud.get_trivia(db, id)