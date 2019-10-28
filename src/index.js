import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Components/homepage';
import Searchpage from './Components/searchpage';
import './App.css'

const router = (
    <Router>
        <div>

            <Route path='/' exact component={Homepage} />
            <Route path='/search' component={Searchpage} />

        </div>
    </Router>


)



ReactDOM.render(router, document.getElementById('root'));