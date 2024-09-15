from sqlalchemy.orm import Session
from . import models
from typing import Optional

def get_trivias(db: Session, keyword: Optional[str] = None, category: Optional[str] = None, language: Optional[str] = None):

    query = db.query(models.Trivia)

    if keyword:
        if language == "japanese":
            query = query.filter(models.Trivia.japanese.ilike(f"%{keyword}%"))
        if language == "english":
            query = query.filter(models.Trivia.english.ilike(f"%{keyword}%"))
        if language == "chinese1":
            query = query.filter(models.Trivia.chinese1.ilike(f"%{keyword}%"))
        if language == "chinese2":
            query = query.filter(models.Trivia.chinese2.ilike(f"%{keyword}%"))
        if language == "korean":
            query = query.filter(models.Trivia.korean.ilike(f"%{keyword}%"))
        if language == "mongolian":
            query = query.filter(models.Trivia.mongolian.ilike(f"%{keyword}%"))
    
    if category != "unselected" and category:
        category = category.capitalize()
        query = query.filter(models.Trivia.category == category)
    
    return query.all()

def get_trivia(db: Session, id: int):
    return db.query(models.Trivia).filter(models.Trivia.id == id).first()