from sqlalchemy.orm import Session
import models, schemas

def get_procedures(db: Session):
    return db.query(models.Procedure).all()

def get_procedure(db: Session, procedure_id: int):
    return db.query(models.Procedure).filter(models.Procedure.id == procedure_id).first()

def create_procedure(db: Session, procedure: schemas.ProcedureCreate):
    db_proc = models.Procedure(title=procedure.title, description=procedure.description)
    db.add(db_proc)
    db.commit()
    db.refresh(db_proc)
    return db_proc
