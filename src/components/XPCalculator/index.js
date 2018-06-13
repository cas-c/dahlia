import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Calculator from './Calculator';
import phone from './phone.png';

const XPCalculator = () => (
    <div className='xp-calculator'>
        <img src={phone} className='cover-picture' alt='Sometimes all we can reach for in the end is our phone.'/>
        <br /><br />
        <Calculator />
        <br />
        <Link to='/'>home</Link>
    </div>
);

export default XPCalculator;
