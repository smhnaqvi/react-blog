import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import {Footer, NavBar } from './Inc'


function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
