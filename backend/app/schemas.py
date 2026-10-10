from pydantic import BaseModel, ConfigDict


class PropertyCreate(BaseModel):
    name: str
    address: str
    property_type: str
    owner_name: str


class PropertyResponse(PropertyCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)