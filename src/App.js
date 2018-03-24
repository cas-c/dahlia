import React from 'react';
import './App.css';
import BioForm from './components/BioForm';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const NavBar = () => (
    <div>
        <Link to="/">Home</Link>
        { ' | ' }
        <Link to='/bio'>Bio Form</Link>
    </div>
);

const App = () => (
    <Router>
        <div className='App'>
            <header className='App-header'>
                Header
            </header>
            <NavBar />
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/bio' component={BioForm} />
            </div>
            <hr />
            <p className='App-intro'>
                <small>This will be some nicer footer stuff eventually.</small>
            </p>
        </div>
    </Router>
);

export default App;
