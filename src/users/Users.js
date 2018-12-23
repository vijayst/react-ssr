import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://react-ssr-api.herokuapp.com/users").then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users page</title>
        <meta name="description" content="Users page description" />
      </Helmet>
      <h1>Users component</h1>
      <Link to="/">Back to home page</Link>
      <h2>List of users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
