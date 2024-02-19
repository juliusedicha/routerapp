import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom"; // Updated import statement

import { useTheme } from "../../ThemeProvider";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUrl = "https://jsonplaceholder.typicode.com/users";

  const navigate = useNavigate(); // Updated hook
  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get(getUrl)
      .then(function (response) {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Users</h1>
      <div className="row">
        {loading ? (
          <div className="display-5">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="col-md-3 my-2" key={user.id}>
              <div className={`card bg-${theme}`}>
                <div className="w-100">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1708200216322-9463ac285552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                    alt="Users Photos"
                  />
                </div>

                <div className="card-body">
                  <h5 className="pl-2 card-title">{user.name}</h5>
                  <ul className="list-group my-3">
                    <li className="list-group-user">
                      <strong>Username: </strong>
                      {user.username}
                    </li>
                    <li className="list-group-user">
                      <strong>Email: </strong>
                      {user.email}
                    </li>
                    <li className="list-group-user">
                      <strong>Phone: </strong>
                      {user.phone}
                    </li>
                  </ul>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => navigate(`/${user.id}`)} // Updated navigation
                  >
                    Show more details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Users;
