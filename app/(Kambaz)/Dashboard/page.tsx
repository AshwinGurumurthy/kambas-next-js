import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/react.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
    <Link href="/Courses/4567/Home"
          className="wd-dashboard-course-link text-decoration-none text-dark">
     <CardImg variant="top" src="/images/javascript.png" width="100%" height={160}/>
     <CardBody>
      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 JavaScript</CardTitle>
      <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
       Full Stack software developer</CardText>
      <Button variant="primary">Go</Button>
     </CardBody>
    </Link>
    </Card></Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
    <Link href="/Courses/6789/Home"
          className="wd-dashboard-course-link text-decoration-none text-dark">
     <CardImg variant="top" src="/images/pdp.jpg" width="100%" height={160}/>
     <CardBody>
      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 PDP</CardTitle>
      <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
       Full Stack software developer</CardText>
      <Button variant="primary">Go</Button>
     </CardBody>
    </Link>
    </Card></Col>
    <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link href="/Courses/7980/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/database.png" width="100%" height={160}/>
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7980 Database Mgmnt</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Back end software developer</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Link>
     </Card></Col>
  </Row>
  <Row xs={1} md={5} className="g-4">
    <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link href="/Courses/3456/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/angular.png" width="100%" height={160}/>
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Angular</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Front end software developer</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Link>
     </Card></Col>
    <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link href="/Courses/5678/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/docker.png" width="100%" height={160}/>
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Docker</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Containerization, images, and orchestration basics.</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Link>
     </Card></Col>
    <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link href="/Courses/7890/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/algorithms.jpg" width="100%" height={160}/>
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 Algorithms</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Sorting, searching, trees, and complexity analysis.</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Link>
     </Card></Col>
     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/9012/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/uiux.png" width="100%" height={160}/>
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS9012 UI/UX</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Design principles, prototyping, and user research.</CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
     </Col>
    </Row>
      </div>
    </div>
);}
