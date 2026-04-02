"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Counter() {
  //let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click" className="btn-success me-2">Up</Button>
      <Button onClick={() => setCount(count - 1)}
              id="wd-counter-down-click" className="btn-danger">Down</Button>
<hr/></div>);}

