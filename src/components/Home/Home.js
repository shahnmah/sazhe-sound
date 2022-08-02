import React from 'react';
import MusicMain from '../Music/MusicMain/MusicMain';
import Navigator from '../Navigator/Navigator';
import './Home.css'

const Home = () => {
    return (
        <div className='container-fluid home-main'>
            <div className="row">
                <div className="col-lg-3">
                    <Navigator/>
                </div>
                <div className="col-lg-6 home-music-container">
                    <MusicMain/>
                </div>
                <div className="col-lg-3">
                hello
                </div>
            </div>
        </div>
    );
};

export default Home;