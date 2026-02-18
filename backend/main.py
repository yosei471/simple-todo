from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine

# DBテーブル作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# DBセッション依存関係
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 一覧取得
@app.get("/procedures", response_model=list[schemas.ProcedureRead])
def read_procedures(db: Session = Depends(get_db)):
    return crud.get_procedures(db)

# 詳細取得
@app.get("/procedures/{procedure_id}", response_model=schemas.ProcedureRead)
def read_procedure(procedure_id: int, db: Session = Depends(get_db)):
    proc = crud.get_procedure(db, procedure_id)
    if not proc:
        raise HTTPException(status_code=404, detail="Procedure not found")
    return proc

# 作成
@app.post("/procedures", response_model=schemas.ProcedureRead)
def create_procedure(procedure: schemas.ProcedureCreate, db: Session = Depends(get_db)):
    return crud.create_procedure(db, procedure)

from fastapi.middleware.cors import CORSMiddleware

# CORS ミドルウェア追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],       # どのオリジンからもアクセス可能
    allow_methods=["*"],       # GET, POST, PUT, DELETE などすべて許可
    allow_headers=["*"],       # ヘッダーもすべて許可
)

