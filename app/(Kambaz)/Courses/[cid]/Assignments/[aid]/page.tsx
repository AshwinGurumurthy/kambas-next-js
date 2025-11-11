"use client";
import { useParams } from "next/navigation";
import { Form, FormControl, FormLabel, Row ,FormSelect, FormCheck, FormGroup, Col, Card, Button} from "react-bootstrap";
import * as db from "../../../../Database";
import Link from "next/link";
import { RootState } from "../../../../store";
import { updateAssignment, addAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();

  const defaultAssignment =  {
    "_id": "N0", 
    "title": "", 
    "description": "", 
    "course": cid, 
    "points": 100, 
    "availFrom": "2024-05-20",
    "availFromTime": "12:00am",  
    "dueDate": "2024-05-27", 
    "dueTime": "23:59pm" 
  };

  const assignment = (aid === "NewAssignment")
    ? defaultAssignment
    : useSelector((state: RootState) =>
  state.assignmentsReducer.assignments.find((assignment: any) => aid === assignment._id));

    const [assignmentState, setAssignmentState] = useState<any>(
  aid === "NewAssignment" ? defaultAssignment : assignment
);
  return (
    <div id="wd-assignments-editor m-4">
      <Form>
        <div className="mt-3"> 
        <FormLabel>
          Assignment Name
        </FormLabel>
        <FormControl className="mb-3" placeholder="Assignment Name" defaultValue={assignment?.title || ""}
        onChange={(e) =>
                setAssignmentState({ ...assignmentState, title: e.target.value }) }/>
        </div>

        <div className="mt-3 ">
        <FormLabel>
          Description
        </FormLabel>
        <FormControl
  as="textarea"
  rows={6}
  onChange = {(e) =>
    setAssignmentState({ ...assignmentState, description: e.target.value }) }
  placeholder="Description"
  value={assignment?.description || ""}

/>
        </div>
        <div className="d-flex mt-3">
          <FormLabel column sm={2}>
          Points
        </FormLabel>
          <FormControl className="me-3" defaultValue={assignment?.points || ""} onChange = {(e)=>
    setAssignmentState({ ...assignmentState, points: e.target.value })} />
        </div>

        <Row className="d-flex mt-3">
          <Col sm={2}>
          <FormLabel>
          Assignment Group
        </FormLabel>
        </Col>
        <Col>
          <FormSelect>
        <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
        </FormSelect>
        </Col>

        </Row>

        <Row className="d-flex mt-3">
          <Col sm={2}>
          <FormLabel>
          Display Grade As
        </FormLabel>
        </Col>
        <Col>
          <FormSelect>
        <option value="ASSIGNMENTS" defaultChecked>Percentage</option>
        <option value="QUIZZES">Marks</option>
        <option value="EXAMS">Grades</option>
        </FormSelect>
        </Col>
        </Row>

         <Row className="align-items-center">
          <Col sm={2}>
          <FormLabel>Submission Type</FormLabel>
          </Col>
        <Col sm={8} className="mt-3 align-items-center">
        <Card>
          <FormGroup controlId="submissionType" className="mb-2 p-3 pb-0">
            <FormSelect defaultValue="Online">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </FormSelect>
          </FormGroup>
      <FormGroup className="align-items-center p-3 pb-4 pt-0">
      <FormLabel column sm={4}>Online entry options</FormLabel>
      <FormCheck type="checkbox" label="Text Entry" defaultChecked name="wd-text-entry" id="wd-text-entry"/>
      <FormCheck type="checkbox" label="Website URL" name="wd-website-url" id="wd-website-url"/>
      <FormCheck type="checkbox" label="Media Recordings" name="wd-media-recordings" id="wd-media-recordings"/>
      <FormCheck type="checkbox" label="Student Annotation" name="wd-radio-student-annotation" id="wd-student-annotation"/>
      <FormCheck type="checkbox" label="File Uploads" name="wd-radio-file-upload" id="wd-file-upload"/>
      </FormGroup>
      </Card>
      </Col>
        
      </Row>

   <div className="d-flex mt-3 mb-3">
    <Col sm={2}>

    <FormLabel>
        Assign
    </FormLabel>

    </Col>
      <Col sm={10}>
        <Card>
          <Card.Body>
            <Col sm={2}>     
                  <FormLabel>Assign to</FormLabel>
                  </Col>
                  <Col >
                  <FormSelect defaultValue="Everyone">
                    <option value="Everyone">Everyone</option>
                  </FormSelect>
                  </Col>

              <Col className="mb-3">
                <FormLabel column sm={2}>
                  Due
                </FormLabel>
                <FormControl type="date" defaultValue={assignment?.dueDate || ""}
                onChange = {(e)=>
    setAssignmentState({ ...assignmentState, dueDate: e.target.value })} />
              </Col>
              <Col>

              <div className="d-flex">
                <FormLabel column sm={2}>
                  Available from
                </FormLabel>
                <FormControl type="date" className="me-5" defaultValue={assignment?.availFrom || ""}  onChange = {(e)=>
    setAssignmentState({ ...assignmentState, availFrom: e.target.value })} />
                <FormLabel column sm={1} className="">
                  Until
                </FormLabel>
                <FormControl type="date" defaultValue={assignment?.dueDate || ""} onChange = {(e)=>
    setAssignmentState({ ...assignmentState, dueDate: e.target.value })} />
              </div>

              </Col>
          </Card.Body>
        </Card>
      </Col>

    </div>
      </Form>
      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`}>
        <Button id="wd-cancel-btn" variant="light" className="border me-2">Cancel</Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
        <Button id="wd-save-btn" variant="danger" 
        onClick={()=> {(aid === "NewAssignment") ? dispatch(addAssignment(assignmentState)) 
        : dispatch(updateAssignment({ ...assignmentState, _id: aid }))}}>Save</Button>
        </Link>
      </div>
      
    </div>
  );
}

