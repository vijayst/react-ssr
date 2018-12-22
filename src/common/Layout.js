import React from 'react';
import Logo from '../images/logo.png';

export default function Layout() {
    return (
        <div>
            <img src={Logo} />
            <div>React SSR example</div>
        </div>
    );
}