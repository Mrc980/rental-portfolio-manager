from sqlalchemy import Column, Integer, String
from app.database import Base


class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    property_type = Column(String, nullable=False)
    owner_name = Column(String, nullable=False)