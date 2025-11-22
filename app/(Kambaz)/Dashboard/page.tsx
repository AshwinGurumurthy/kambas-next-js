"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, updateCourse, deleteCourse,setCourses, } from "../Courses/reducer";
import { RootState } from "../store";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Enrollments/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/reactjs.jpg", description: "New Description"
  });

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const {currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [showAll, setShowAll] = useState(false);
  //const [showGo,toggleShowGo] = useState(true);
  const dispatch = useDispatch();

   const fetchCourses = async () => {
    if(showAll) {
    try {
      const courses = await client.fetchAllCourses();
      console.log("ALL COURSES →", courses);
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  } else {
      try {
        const courses = await client.findCoursesForEnrolledUser(currentUser._id);
         console.log("ENROLLED COURSES →", courses);
        dispatch(setCourses(courses));
      } catch (error) {
        console.error(error);
      }
  }
};

   const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

   const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};

  

const onEnrollToCourse = async (courseId: string) => {
  const enrollment = await client.enrollUserInCourse(currentUser._id, courseId);
  dispatch(setEnrollments([ ...enrollments, enrollment ]));
};

const onUnenrollToCourse = async (courseId: string) => {
  await client.unenrollUserFromCourse(currentUser._id, courseId);
  dispatch(setEnrollments(
  enrollments.filter((e) => e.course !== courseId)
));
};

 useEffect(() => {
  fetchCourses();
}, [showAll, currentUser]);


useEffect(() => {
  const loadEnrollments = async () => {
    if (!currentUser?._id) return;
    const data = await client.findEnrollmentsForUser(currentUser._id);
dispatch(setEnrollments(data));
  };
  loadEnrollments();
}, [currentUser]);

  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1>
  <hr />

  <div className="d-flex justify-content-between align-items-center p-1">
    <h5>New Course</h5>

    <div className="d-flex gap-2">
     {<button
        className="btn btn-primary"
        id="wd-enrollments-click"
        onClick={() => setShowAll(!showAll)}
      >
        Enrollments
      </button> }

      <button
        className="btn btn-primary"
        id="wd-add-new-course-click"
        onClick={onAddNewCourse}
      >
        Add
      </button>

      

      <button onClick={onUpdateCourse} className="btn btn-secondary float-end" id="wd-update-course-click" >
        Update
      </button>

    </div>
  </div>

         


      <FormControl value={course.name} className="mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

      <hr />


      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
    <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <CardBody className="card-body">
          <Link
            href={`/Courses/${course._id}/Home`}
            className="wd-dashboard-course-link text-decoration-none text-dark"
            /*onClick={(event) => {
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
            }}*/
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
           {/* {showGo && <Button variant="primary">Go</Button>} */}
          </Link>

        {showAll && (
  enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === course._id
  ) ? (
    <Button className="btn-danger" onClick={() => onUnenrollToCourse(course._id)}>
      Unenroll
    </Button>
  ) : (
    <Button className="btn-success" onClick={() => onEnrollToCourse(course._id)}>
      Enroll
    </Button>
  )
)}


          <button className="btn btn-danger"
            onClick={(event) => {
              event.preventDefault();
              onDeleteCourse(course._id);
            }} >
      Delete
    </button>


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
    </div>
);}