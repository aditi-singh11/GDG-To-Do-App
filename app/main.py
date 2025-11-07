from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Session, create_engine, select
from .models import Todo


DATABASE_URL = "sqlite:///./todos.db"
engine = create_engine(DATABASE_URL, echo=False)


app = FastAPI()


# Allow all origins for local development; tighten in production.
app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
SQLModel.metadata.create_all(engine)


@app.get("/todos")
def list_todos():
with Session(engine) as session:
todos = session.exec(select(Todo).order_by(Todo.id)).all()
return todos


@app.post("/todos", status_code=201)
def create_todo(todo: Todo):
with Session(engine) as session:
session.add(todo)
session.commit()
session.refresh(todo)
return todo


@app.get("/todos/{todo_id}")
def get_todo(todo_id: int):
with Session(engine) as session:
todo = session.get(Todo, todo_id)
if not todo:
raise HTTPException(status_code=404, detail="Todo not found")
return todo


@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, updated: Todo):
with Session(engine) as session:
todo = session.get(Todo, todo_id)
if not todo:
raise HTTPException(status_code=404, detail="Todo not found")
todo.title = updated.title
todo.description = updated.description
todo.completed = updated.completed
session.add(todo)
session.commit()
session.refresh(todo)
return todo


@app.delete("/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
with Session(engine) as session:
todo = session.get(Todo, todo_id)
if not todo:
raise HTTPException(status_code=404, detail="Todo not found")
session.delete(todo)
session.commit()
return None