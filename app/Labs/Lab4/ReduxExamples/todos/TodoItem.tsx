import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { todo } from "node:test";
import { ListGroupItem, Button } from "react-bootstrap";
export default function TodoItem( { todo }: { todo: { id: string; title: string } }
    // { todo,deleteTodo, setTodo}
    ) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
      {todo.title}
      <div className="ms-auto d-flex gap-2">
       <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"  className="btn btn-primary" > Edit </Button>
      <Button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click" className="btn btn-danger"> Delete </Button>
      </div>
     
      
    </ListGroupItem>
);}

