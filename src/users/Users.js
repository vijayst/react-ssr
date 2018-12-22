import React from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
    return (
        <div>
            <h1>Users component</h1>
            <Link to="/">Back to home page</Link>
            <h2>List of users</h2>
        </div>
    );
}