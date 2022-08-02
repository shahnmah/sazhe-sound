import React from 'react';
import Navigator from '../Navigator/Navigator';
import './Home.css'

const Home = () => {
    return (
        <div className='container-fluid home-main mt-4'>
            <div className="row">
                <div className="col-lg-3">
                    <Navigator/>
                </div>
                <div className="col-lg-6">
                hello
                </div>
                <div className="col-lg-3">
                hello
                </div>
            </div>
        </div>
    );
};

export default Home;