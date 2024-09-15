from sqlalchemy import Column, Integer, String
from .database import Base

class Trivia(Base):
    __tablename__ = "trivias"

    id = Column(Integer, primary_key=True, autoincrement=True)
    japanese = Column(String(255), nullable=False)
    english = Column(String(255), nullable=False)
    chinese1 = Column(String(255), nullable=False)
    chinese2 = Column(String(255), nullable=False)
    korean = Column(String(255), nullable=False)
    mongolian = Column(String(255), nullable=False)
    category = Column(String(15), nullable=False)
    url1 = Column(String(255), nullable=False)
    url2 = Column(String(255), nullable=True)
    address1 = Column(String(1023), nullable=True)
    address2 = Column(String(1023), nullable=True)
