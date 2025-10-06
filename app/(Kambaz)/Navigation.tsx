import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed top-0 bottom-0 d-none d-md-block bg-black z-2 overflow-auto"
      style={{ width: 120, minHeight: "100vh" }}
      id="wd-kambaz-navigation"
      role="navigation"
      aria-label="Kambaz navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center py-3 mb-0"
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        aria-label="Northeastern University"
      >
        <img src="/images/neu.jpg" width="75" alt="Northeastern University" className="img-fluid" />
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center py-3 mb-0">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none" aria-label="Account">
          <FaRegCircleUser className="fs-1 text-white" />
          <div className="small mt-1">Account</div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-white text-center py-3 mb-0">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none" aria-label="Dashboard">
          <AiOutlineDashboard className="fs-1 text-danger" />
          <div className="small mt-1 text-danger">Dashboard</div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center py-3 mb-0">
        <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none" aria-label="Calendar">
          <IoCalendarOutline className="fs-1 text-white" />
          <div className="small mt-1">Calendar</div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center py-3 mb-0">
        <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none" aria-label="Inbox">
          <FaInbox className="fs-1 text-white" />
          <div className="small mt-1">Inbox</div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center py-3 mb-0">
        <Link href="/Library" id="wd-library-link" className="text-white text-decoration-none" aria-label="Library">
          <LiaBookSolid className="fs-1 text-white" />
          <div className="small mt-1">Library</div>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center py-3 mb-0">
        <Link href="/Settings" id="wd-settings-link" className="text-white text-decoration-none" aria-label="Settings">
          <LiaCogSolid className="fs-1 text-white" />
          <div className="small mt-1">Settings</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
