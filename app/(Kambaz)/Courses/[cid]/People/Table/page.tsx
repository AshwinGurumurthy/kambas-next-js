"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
import { findUsersForCourse } from "../../../client";

export default function PeopleTablePage() {
  const { cid } = useParams<{ cid: string }>();

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const fetchUsers = async () => {
    if (!cid) return;
    setLoading(true);
    setError(null);
    try {
      const data = await findUsersForCourse(cid);
      setUsers(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setUsers([]);
      setError(e?.response?.data?.message ?? e?.message ?? "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  return (
    <div id="wd-people-table">
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="text-muted mb-2">Loading...</div>}

      {showDetails && showUserId && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            setShowUserId(null);
            fetchUsers();
          }}
        />
      )}

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  className="text-decoration-none"
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
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