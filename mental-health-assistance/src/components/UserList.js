import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", status: "active" },
    { id: 2, name: "Jane Doe", status: "active" },
  ]);

  const toggleBlockUser = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "active" ? "blocked" : "active" } : u));
  };

  return (
    <div>
      <AdminNavbar />
      <h2 className="text-center pt-5 mt-5">Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.status}</td>
              <td>
                <button onClick={() => toggleBlockUser(u.id)}>
                  {u.status === "active" ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
