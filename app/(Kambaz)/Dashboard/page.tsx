import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.png" width={200} height={150} alt="React JS course cover" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/javascript.png" width={200} height={150} alt="JS course cover" />
            <div>
              <h5> CS4567 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/pdp.jpg" width={200} height={150} alt="programming paradigm course cover" />
            <div>
              <h5> CS6789 Programming Paradigm Design </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/7980" className="wd-dashboard-course-link">
            <Image src="/images/database.png" width={200} height={150} alt="database course cover" />
            <div>
              <h5> CS7980 Database Managment Systems </h5>
              <p className="wd-dashboard-course-title">
                Back end software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/angular.png" width={200} height={150} alt="Angular course cover" />
            <div>
              <h5> CS2345 Angular </h5>
              <p className="wd-dashboard-course-title">
                Front end software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/1013" className="wd-dashboard-course-link">
            <Image src="/images/docker.png" width={200} height={150} alt="Docker course cover" />
            <div>
              <h5> CS1013 Docker & Containers </h5>
              <p className="wd-dashboard-course-title">
                Containerization, images, and orchestration basics.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/1014" className="wd-dashboard-course-link">
            <Image src="/images/algorithms.jpg" width={200} height={150} alt="Algorithms course cover" />
            <div>
              <h5> CS1014 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Sorting, searching, trees, and complexity analysis.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

         <div className="wd-dashboard-course">
          <Link href="/Courses/1015" className="wd-dashboard-course-link">
            <Image src="/images/uiux.png" width={200} height={150} alt="UI/UX Design course cover" />
            <div>
              <h5> CS1015 UI/UX</h5>
              <p className="wd-dashboard-course-title">
                Design principles, prototyping, and user research.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
);}
