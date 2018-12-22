import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home component</h1>
            <p>Both the below navigation should work!</p>
            <a href="/users">Users via server render</a><br />
            <Link to="/users">Users via react router link</Link>
        </div>
    )
}