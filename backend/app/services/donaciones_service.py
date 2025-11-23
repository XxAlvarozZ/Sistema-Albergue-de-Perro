from sqlalchemy.orm import Session
from .. import repository, schemas

def crear_donacion(db: Session, donacion_in: schemas.DonacionCreate):
    return repository.donaciones_repo.crear_donacion(db, donacion_in)

def listar_donaciones(db: Session, skip:int=0, limit:int=100):
    return repository.donaciones_repo.listar_donaciones(db, skip, limit)
