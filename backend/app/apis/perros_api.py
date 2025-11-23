from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from .. import schemas
from ..database import get_db
from ..services import perros_service

router = APIRouter(prefix="/api/perros", tags=["perros"])

@router.post("/", response_model=schemas.PerroRead, status_code=status.HTTP_201_CREATED)
def crear_perro(perro: schemas.PerroCreate, db: Session = Depends(get_db)):
    creado = perros_service.crear_perro(db, perro)
    return creado

@router.get("/", response_model=list[schemas.PerroRead])
def obtener_perros(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return perros_service.listar_perros(db, skip, limit)

