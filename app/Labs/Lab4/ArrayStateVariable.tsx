import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "./store";
export default function ArrayStateVariable() {
    const { todos } = useSelector((state: RootState) => state.todosReducer);
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <Button className="btn btn-success mb-2" onClick={addElement}>Add Element</Button>
   <ListGroup>
    {array.map((item, index) => (
     <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center"> {item} 
      <Button onClick={() => deleteElement(index)} className="btn btn-danger btn-sm ms-2">
       Delete</Button>
     </ListGroup.Item>))}
   </ListGroup><hr/>
   <ListGroup className="d-flex flex-column gap-2">
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
   </div>);}

