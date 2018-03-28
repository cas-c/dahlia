import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

// const credit = 'https://www.pixiv.net/member.php?id=169559';
import image from '../../flower.svg';
import pic from './pic.jpg';

const Home = () => (
    <div className='home'>
        <div className='home-image-col'>
            <div className='home-image-wrapper'>
                <span className='home-image' />
                <span className='home-image2' />
                <span className='home-image3' />
                {/*<img src={pic} className='home-image' />*/}
            </div>
            {/*<figure className="image is-350x350">
                <div className='home-image-wrapper'>
                    <img src={pic} className='home-image' />
                </div>
            </figure>*/}
        </div>
        <div className='welcome-text box'>
            <img src={image} className='welcome-image'/>
            <br />
            - - - - - - - - - - -
            <br />
            dahlia's room
            <br />
            - - - - - - - - - - -
            <br />
            <Link to={'/bio'}>dox</Link>
            <br />
            - - - - - - - - - - -
            <br />
            <Link to={'/finder'}>search/destroy</Link>
            <br />
            - - - - - - - - - - -
            <br />
            <a href='https://www.pixiv.net/member_illust.php?mode=medium&illust_id=26490274' target='_blank'>art credit</a>
            <br />
            - - - - - - - - - - -
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href='https://patreon.com/lipgloss' target='_blank'>↩</a>
        </div>
    </div>
);

export default Home;