"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./PeopleTable";
import * as client from "../../../client";

export default function CoursePeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const users = await client.findUsersForCourse(courseId);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} onRefresh={fetchUsers} />;
}
