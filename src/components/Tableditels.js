import React, { useState, useEffect } from "react";
import axios from "axios";

const Tableditels = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="App">
        <table>
          <thead>
            <tr className="tablehead">
              <th>#</th>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tableditels;

