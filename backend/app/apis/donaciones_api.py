from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from .. import schemas
from ..database import get_db
from ..services import donaciones_service

router = APIRouter(prefix="/api/donaciones", tags=["donaciones"])

@router.post("/", response_model=schemas.DonacionRead, status_code=status.HTTP_201_CREATED)
def crear_donacion(donacion: schemas.DonacionCreate, db: Session = Depends(get_db)):
    creado = donaciones_service.crear_donacion(db, donacion)
    return creado

@router.get("/", response_model=list[schemas.DonacionRead])
def obtener_donaciones(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return donaciones_service.listar_donaciones(db, skip, limit)

