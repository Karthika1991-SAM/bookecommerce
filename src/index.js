import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <Router>
        <App />
    </Router>
);
