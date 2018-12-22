import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default function Users() {
  return (
    <div>
      <Helmet>
        <title>Users page</title>
        <meta name="description" content="Users page description" />
      </Helmet>
      <h1>Users component</h1>
      <Link to="/">Back to home page</Link>
      <h2>List of users</h2>
    </div>
  );
}
