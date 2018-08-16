import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.css';
import Home from './components/Home';

const Loading = props => {
    if (props.error) {
        return null; // add error handling
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

const LoadableBioForm = Loadable({
    loader: () => import('./components/BioForm'),
    loading: Loading
});

const LoadableFinder = Loadable({
    loader: () => import('./components/Finder'),
    loading: Loading
});

const LoadableXPCalculator = Loadable({
    loader: () => import('./components/XPCalculator'),
    loading: Loading
});

const App = () => (
    <Router>
        <div className='App'>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/bio' component={LoadableBioForm} />
                <Route path='/finder' component={LoadableFinder} />
                <Route path='/xp' component={LoadableXPCalculator} />
            </div>
        </div>
    </Router>
);

export default App;
