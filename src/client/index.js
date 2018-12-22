import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../common/Layout';
import '../sass/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById('root'));
