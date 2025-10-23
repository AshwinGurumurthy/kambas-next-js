"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const path = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={`${cid}-${index}`}  
          href={link === "People" ? `/Courses/${cid}/People/Table` : `/Courses/${cid}/${link}`}
          className={`list-group-item ${
            path.includes(`/Courses/${cid}/${link}`) ? "active border-0" : "text-danger border-0"
          }`}
        >
          {link}
          <br />
        </Link>
      ))}
    </div>
  );
}
