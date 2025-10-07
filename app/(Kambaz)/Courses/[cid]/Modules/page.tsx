import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function Modules() {
  return (
    <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Week 1 

        <div className = "float-end">
        <GreenCheckmark/>
        <FaPlus/>
        <IoEllipsisVertical />
        </div>
        
        </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          LEARNING OBJECTIVES </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Introduction to the course </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Learn what is Web Development </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 2 

        <div className = "float-end">
        <GreenCheckmark/>
        <FaPlus/>
        <IoEllipsisVertical />
        </div> </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          HTML Syntax </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          HTML and its tags </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Building your first website </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
   <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 3 

        <div className = "float-end">
        <GreenCheckmark/>
        <FaPlus/>
        <IoEllipsisVertical />
        </div> </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Styling with CSS</ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Syntax </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
          Other useful features associated with CSS </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</div>
  );}

  
