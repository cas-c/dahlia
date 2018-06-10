import React from 'react';
import './App.css';
import Home from './components/Home';
import BioForm from './components/BioForm';
import Finder from './components/Finder';

import { HashRouter as Router, Route } from 'react-router-dom';
import XPCalculator from './components/XPCalculator';

const App = () => (
    <Router>
        <div className='App'>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/bio' component={BioForm} />
                <Route path='/finder' component={Finder} />
                <Route path='/xp' component={XPCalculator} />
            </div>
        </div>
    </Router>
);

export default App;
