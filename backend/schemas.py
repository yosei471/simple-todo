from pydantic import BaseModel

class ProcedureBase(BaseModel):
    title: str
    description: str

class ProcedureCreate(ProcedureBase):
    pass

class ProcedureRead(ProcedureBase):
    id: int

    class Config:
        orm_mode = True
