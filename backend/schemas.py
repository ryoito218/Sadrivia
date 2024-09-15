from pydantic import BaseModel
from typing import Optional

class Search(BaseModel):
    keyword: Optional[str] = None
    category: Optional[str] = None
    language: Optional[str] = None

class Trivia(BaseModel):
    id: int
    japanese: str
    english: str
    chinese1: str
    chinese2: str
    korean: str
    mongolian: str
    category: str
    url1: Optional[str] = None
    url2: Optional[str] = None
    address1: Optional[str] = None
    address2: Optional[str] = None