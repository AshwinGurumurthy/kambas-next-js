"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
       
       const [user, setUser] = useState<any>({
              username: "",
              password: "",
       });

       const dispatch = useDispatch();
       const signup = async () => {
               const currentUser = await client.signup(user);
               dispatch(setCurrentUser(currentUser));
               redirect("Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"
             value={user.username} 
             onChange={(e) => setUser({ ...user, username: e.target.value })}/>
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"
             value={user.password} 
             onChange={(e) => setUser({ ...user, password: e.target.value })}
/>
      
      <FormControl id="wd-verify-password"
             placeholder="verify password" type="password"
             className="mb-2"
/>

      <button  id="wd-signup-btn" className="btn btn-primary w-100 mb-2" onClick={signup}> Sign up </button>
      <Link  id="wd-signin-btn" href="Signin" className="btn btn-primary w-100 mb-2"> Sign in </Link>
    </div>
);
}
