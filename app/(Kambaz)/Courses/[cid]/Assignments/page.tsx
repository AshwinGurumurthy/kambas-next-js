"use client";
import Link from "next/link";
import { Badge, Button, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const {currentUser}  = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();

  const handleDelete = (assignment:any) => {
  if (window.confirm(`Are you sure you want to delete "${assignment.title}"?`)) {
      dispatch(deleteAssignment(assignment._id));
    }
};

  
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center">
      <InputGroup className="w-50" style={{maxWidth: "400px"}}>
    <span className="input-group-text bg-white border-end-0">
      <CiSearch id="wd-search-icon" size={20} className="text-muted" />
    </span>
    <FormControl
      placeholder="Search..."
      id="wd-search-assignment"
      className="border-start-0 shadow-none"
    />
  </InputGroup>
  {isFaculty && (
      <div className="d-flex float-end ms-auto">
      <Button variant="light" size="lg" className="d-flex align-items-center" id="wd-add-assignment-group">
       <FaPlus className="me-2 pe-2" /> Group </Button>

       
        <Link href={`/Courses/${cid}/Assignments/NewAssignment`}
                  className="wd-assignment-link text-decoration-none text-dark fw-bold">
        <Button variant="danger" size="lg" className="d-flex align-items-center" id="wd-add-assignment">
          <FaPlus className="me-2" /> Assignment </Button> 
        </Link>
       
      </div> )}
      
       </div>

       <ListGroup className="rounded-0" id="wd-assignments">
    <ListGroupItem className="p-0 mb-3 mt-5">
      <div className="wd-title p-4 ps-2 bg-secondary" id="wd-assignments-title"> 
        <BsGripVertical className="me-2 fs-3" />
        <IoMdArrowDropdown /> <span className="p-1 fw-bold">ASSIGNMENTS</span>
        <BsThreeDotsVertical className="ms-2 float-end" />
        <FaPlus className="ms-2 float-end" />
        <Badge bg="light" className="ms-2 float-end text-dark rounded-5 text-muted">
          40% of Total
        </Badge>
        </div>
        <ListGroupItem />

        {assignments.filter((assignment) => assignment.course === cid)
        .map((assignment) => (

        <ListGroupItem key ={assignment._id} className="wd-assignment-status-border p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="fs-4" />
              <LuNotebookPen className="text-success me-3 fs-4" />
              <div>
                
              <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  <h5 className="mb-0">{assignment.title}</h5>
              </Link>
                
              <div>
              <span className = "text-danger">Multiple Modules </span>| <span className = "text-muted fw-bold">Not available until </span> {assignment.availFrom} at {assignment.availFromTime} |
              </div>
              <div>
                <span className="fw-bold">Due </span> {assignment.dueDate} at {assignment.dueTime} | {assignment.points} pts
              </div>
            </div>
            
            </div>
              <div className="d-flex align-items-center ms-3">
          <FaTrash className="text-danger me-4 fs-4" onClick={() => handleDelete(assignment)}/>   
          <FaCheckCircle className="text-success me-3 fs-4" />
          <BsThreeDotsVertical className="text-muted me-3 fs-4" />
        </div>
        </div>
        </ListGroupItem>

        ))}
    </ListGroupItem>
    
    
    </ListGroup>
    </div>
  );
}
