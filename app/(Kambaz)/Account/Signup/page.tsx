import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h2>Sign up</h2>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      
      <FormControl id="wd-verify-password"
             placeholder="verify password" type="password"
             className="mb-2"/>

      <Link  id="wd-signin-btn" href="Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link>
      <Link  id="wd-signin-btn" href="Signin" className="btn btn-primary w-100 mb-2"> Sign in </Link>
    </div>
);}
