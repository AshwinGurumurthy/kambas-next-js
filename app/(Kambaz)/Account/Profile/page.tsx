import Link from "next/link";
import { Form, FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl id="wd-username"
      defaultValue="alice"
             placeholder="username"
             className="wd-username"/>
     <FormControl id="wd-password"
     defaultValue="123"
             placeholder="password" type="password"
             className="wd-password"/>
      <FormControl id="wd-firstname"
      defaultValue="Alice"
      placeholder="First Name"/>
      <FormControl id="wd-lastname"
      defaultValue="Wonderland"
      placeholder="Last Name"/>
      <FormControl id="wd-dob"
      defaultValue="2000-01-01"
      type="date"/>
      <FormControl id="wd-email"
      defaultValue="alice@wonderland"
      type="email"/>
      <FormControl as="select" id="wd-role" defaultValue="FACULTY">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormControl>
      <Link id="wd-signin-btn" href="Signin" className="btn btn-primary bg-danger w-100 mb-2"> Sign out </Link>
 
    </div>
);}

