import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

import image from '../../flower.svg';
import pic from './pic.jpg';

const Home = () => (
    <div className='home'>
        <div className='home-item home-dahlia'>
            <div className='home-image-wrapper'>
                <img alt='' src={pic} className='home-image' />
                <img alt='' src={pic} className='home-image2' />
                <img alt='' src={pic} className='home-image3' />
            </div>
        </div>

        <div className='home-item home-content'>
            <img alt='' src={image} className='welcome-image'/>
            <div className='welcome-text'>
                welcome to dahlia's room
            </div>
            <div className='welcome-text'>
                <Link to={'/bio'}>tell me about you</Link>
            </div>
            <div className='welcome-text'>
                <Link to={'/finder'}>looking for something?</Link>
            </div>
            <div className='welcome-text'>
                <Link to={'/xp'}>calculator</Link>
            </div>
            <div className='welcome-text'>
                <a href='https://www.pixiv.net/member_illust.php?mode=medium&illust_id=26490274' rel="noopener noreferrer" target='_blank'>looks familiar</a>
            </div>
            <a href='mailto:dahlia@witch.cafe' title="let's talk">✉</a>{ ' ' }
            <a rel="noopener noreferrer" href='https://patreon.com/lipgloss' target='_blank' title='where i came from'>↩</a>
        </div>
    </div>
);

export default Home;