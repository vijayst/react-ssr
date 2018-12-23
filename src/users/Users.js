import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";
import StaticContext from "../client/StaticContext";

export function loadData() {
    return axios
        .get("http://react-ssr-api.herokuapp.com/users")
        .then(response => {
            return {
                users: response.data
            };
        });
}

export default function Users(props) {
    let [users, setUsers] = useState([]);
    const data = useContext(StaticContext);

    useEffect(() => {
        if (!data || !data.users) {
            loadData().then(data => {
                setUsers(data.users);
            });
        }
    }, []);

    if (props.staticContext) {
        users = props.staticContext.data.users;
    }

    if (data && data.users) {
        users = data.users;
    }

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
