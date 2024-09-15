from pydantic import BaseModel
from typing import Optional

class Search(BaseModel):
    keyword: Optional[str] = None
    category: Optional[str] = None
    language: Optional[str] = None