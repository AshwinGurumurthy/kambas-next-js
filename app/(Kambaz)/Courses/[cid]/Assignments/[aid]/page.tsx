"use client";
import { Form, FormControl, FormLabel, Row ,FormSelect, FormCheck, FormGroup, Col, Card} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor m-4">
      <Form>
        <div className="mt-3"> 
        <FormLabel>
          Assignment Name
        </FormLabel>
        <FormControl className="mb-3" placeholder="A1"/>
        </div>

        <div className="mt-3 ">
        <FormLabel>
          Description
        </FormLabel>
        <FormControl
  as="textarea"
  rows={6}
  disabled
  value={`The assignment is available online
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
/>
        </div>
        <div className="d-flex mt-3">
          <FormLabel column sm={2}>
          Points
        </FormLabel>
          <FormControl className="me-3" placeholder="100"/>
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
      <FormCheck type="checkbox" label="Webite URL" name="wd-website-url" id="wd-website-url"/>
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
                <FormControl type="date" />
              </Col>
              <Col>
              <div className="d-flex">
                <FormLabel column sm={2}>
                  Available from
                </FormLabel>
                <FormControl type="date" className="me-5"/>
                <FormLabel column sm={1} className="">
                  Until
                </FormLabel>
                <FormControl type="date" />
              </div>
              </Col>
          </Card.Body>
        </Card>
      </Col>
    </div>
    
      </Form>
    </div>
  );
}

