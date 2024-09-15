from sqlalchemy.orm import Session
from .schemas import Search
from .models import Trivia


def get_trivias(search: Search, db: Session):

    query = db.query(Trivia)

    if search.keyword:
        if search.language == 1:
            query = query.filter(Trivia.japanese.ilike(f"%{search.keyword}%"))
        if search.language == 2:
            query = query.filter(Trivia.english.ilike(f"%{search.keyword}%"))
        if search.language == 3:
            query = query.filter(Trivia.chinese1.ilike(f"%{search.keyword}%"))
        if search.language == 4:
            query = query.filter(Trivia.chinese2.ilike(f"%{search.keyword}%"))
        if search.language == 5:
            query = query.filter(Trivia.korean.ilike(f"%{search.keyword}%"))
        if search.language == 6:
            query = query.filter(Trivia.mongolian.ilike(f"%{search.keyword}%"))
    
    if search.category != "未選択" and search.category:
        query = query.filter(Trivia.category == search.category)
    
    return query.all()