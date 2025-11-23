from sqlalchemy.orm import Session
from .. import repository, schemas

def crear_perro(db: Session, perro_in: schemas.PerroCreate):
    # aquí podrías validar reglas de negocio (ej. nombre único) si quieres
    return repository.perros_repo.crear_perro(db, perro_in)

def listar_perros(db: Session, skip:int=0, limit:int=100):
    return repository.perros_repo.listar_perros(db, skip, limit)
