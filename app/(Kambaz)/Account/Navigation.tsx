"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { usePathname } from "next/navigation";
import { NavLink } from "react-bootstrap";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 mt-1">
      {links.map((link) => (
        <Link
          key={link}
          href={link}
          className={`list-group-item border-0 ${
            pathname.endsWith(`/${link}`) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
            <NavLink
              as={Link}
              href={`/Account/Users`}
              className={` list-group-item border-0 text-danger text-decoration-none ${
              pathname.includes("Users") ? "active text-dark" : ""
            }`}
            >
              {" "}
              Users{" "}
            </NavLink>
      )}
    </div>
  );
}
