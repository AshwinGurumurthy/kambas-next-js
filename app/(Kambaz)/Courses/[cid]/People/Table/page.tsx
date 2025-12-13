"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
//import * as db from "../../../../Database";
import PeopleDetails from "../Details";
import Link from "next/link";
import * as client from "../../../client";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
    
    const { cid } = useParams(); 
    //const { users, enrollments } = db;
    const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const [usersList, setUsersList] = useState(users);

  useEffect(() => {
    const getUsers = async () => {
      if (users.length === 0) {
        setUsersList(await client.findUsersForCourse(cid as string));
      }
    };
    getUsers();
  }, [users]);

  useEffect(() => {
  if (users.length > 0) {
    setUsersList(users);
  }
}, [users]);

 return (
  <div id="wd-people-table">
    {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}

   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
  {usersList
    .map((user) => (
      <tr key={user._id}>
        <td className="wd-full-name text-nowrap">
          <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >

          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span>{user.firstName} {user.lastName}</span>
          </span>

        </td>
        
        <td className="wd-login-id">{user.loginId}</td>
        <td className="wd-section">{user.section}</td>
        <td className="wd-role">{user.role}</td>
        <td className="wd-last-activity">{user.lastActivity}</td>
        <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
</tbody>


   </Table>
  </div> 
  );
}