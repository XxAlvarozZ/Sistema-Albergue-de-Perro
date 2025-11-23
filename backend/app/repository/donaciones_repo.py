from sqlalchemy.orm import Session
from .. import models, schemas

def crear_donacion(db: Session, donacion_in: schemas.DonacionCreate) -> models.Donacion:
    nuevo = models.Donacion(
        nombre_donante=donacion_in.nombre_donante,
        mensaje=donacion_in.mensaje,
        monto=donacion_in.monto
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

def listar_donaciones(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Donacion).offset(skip).limit(limit).all()


