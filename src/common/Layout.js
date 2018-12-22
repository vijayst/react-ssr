import React from 'react';
import Logo from '../images/logo.png';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Users from '../users/Users';
import NotFound from './NotFound';

export default function Layout() {
    return (
        <div>
            <img src={Logo} />
            <div>React SSR example</div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/users" exact component={Users}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    );
}