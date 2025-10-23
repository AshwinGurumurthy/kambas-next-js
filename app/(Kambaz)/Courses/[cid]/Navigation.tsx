"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const path = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={`${cid}-${link}-${index}`}  
          href={link === "People" ? `/Courses/${cid}/People/Table` : `/Courses/${cid}/${link}`}
          className={`list-group-item ${
            path.startsWith(`/Courses/${cid}/${link}`) ? "active border-0" : "text-danger border-0"
          }`}
        >
          {link}
          <br />
        </Link>
      ))}
    </div>
  );
}
