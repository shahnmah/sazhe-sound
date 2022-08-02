import React from 'react';
import MusicMain from '../Music/MusicMain/MusicMain';
import Navigator from '../Navigator/Navigator';
import './Home.css'

const Home = () => {
    return (
        <div className='container-fluid home-main'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <Navigator/>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-6 col-12 home-music-container">
                    <MusicMain/>
                </div>
            </div>
        </div>
    );
};

export default Home;