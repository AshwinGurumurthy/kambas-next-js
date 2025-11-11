"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as db from "../Database";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, updateCourse, deleteCourse } from "../Courses/reducer";
import { RootState } from "../store";
import { addEnrollment, deleteEnrollment } from "./Enrollments/reducer";

export default function Dashboard() {
  //const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/reactjs.jpg", description: "New Description"
  });
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const {currentUser } = useSelector((state: RootState) => state.accountReducer);
  const {enrollments} = useSelector((state: RootState) => state.enrollmentsReducer);
  
  const [showAll, setShowAll] = useState(false);
  const [showGo,toggleShowGo] = useState(true);
  const dispatch = useDispatch();



  const handleEnroll = (courseId: string) => dispatch(addEnrollment({ userId: currentUser._id, courseId }));
  const handleUnenroll = (courseId: string) => dispatch(deleteEnrollment({ userId: currentUser._id, courseId }));

  useEffect(() => {
  toggleShowGo(!showAll);
}, [showAll]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      <h5>New Course </h5>
      <button className="btn btn-primary float-end me-2" onClick={() => setShowAll(!showAll)} id="wd-update-course-click">
          Enrollments </button>
       <button className="btn btn-primary float-end me-2"
                  id="wd-add-new-course-click"
                 onClick={() => dispatch(addNewCourse(course))}> Add </button>
        <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
         


      <FormControl value={course.name} className="mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

      <hr />


      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
  .filter((course: any) =>
    showAll
      ? true
      : enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser?._id &&
            enrollment.course === course._id
        )
  )
  .map((course: any) => (
    <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <CardBody className="card-body">
          <Link
            href={`/Courses/${course._id}/Home`}
            className="wd-dashboard-course-link text-decoration-none text-dark"
            onClick={(event) => {
              if (
                showAll &&
                !enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser?._id &&
                    enrollment.course === course._id
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <CardImg src={`/images/${course.image}`} variant="top" width="100%" height={160} />
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {course.name}
            </CardTitle>
            <CardText
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {course.description}
            </CardText>
            {showGo && <Button variant="primary">Go</Button>}
          </Link>

          {showAll && (
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id &&
                enrollment.course === course._id
            ) ? (
              <Button className="btn-danger" onClick={() => handleUnenroll(course._id)}>
                Unenroll
              </Button>
            ) : (
              <Button className="btn-success" onClick={() => handleEnroll(course._id)}>
                Enroll
              </Button>
            )
          )}

          <Button
            onClick={(event) => {
              event.preventDefault();
              dispatch(deleteCourse(course._id));
            }}
            className="btn btn-danger float-end"
            id="wd-delete-course-click"
          >
            Delete
          </Button>

          <Button
            id="wd-edit-course-click"
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
            className="btn btn-warning me-2 float-end"
          >
            Edit
          </Button>
        </CardBody>
      </Card>
    </Col>
  ))}
        </Row>
      </div>
    </div>);}

