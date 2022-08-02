import React from 'react';
import logo from '../../assets/images/logo.png'
import headerIcon from '../../assets/images/header-icon.png'
import { CgCollage } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import homeIcon from '../../assets/images/home-icon.png'
import trendsIcon from '../../assets/images/trends-icon.png'
import libraryIcon from '../../assets/images/library-icon.png'
import discoverIcon from '../../assets/images/discover-icon.png'
import madeForYouIcon from '../../assets/images/made-icon.png'
import dailyMixIcon from '../../assets/images/daily-icon.png'
import likedSongsIcon from '../../assets/images/liked-icon.png'
import favoriteArtistIcon from '../../assets/images/fav-icon.png'
import playlistIcon from '../../assets/images/playlist.png'
import './Navigator.css'



const Navigator = () => {
    return (
        <div className='px-2'>
            <div className="navigator-header">
                <div className="navigator-header-container d-flex justify-content-between align-items-center">
                    <img src={headerIcon} alt="icon" />
                    <CgCollage/>
                </div>
                <div className="navigator-logo-container py-4">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="navigator-menu">
                <ul>
                    <li><span><img src={homeIcon} alt="" /></span>Home</li>
                    <li><span><img src={trendsIcon} alt="" /></span>Home</li>
                    <li><span><img src={libraryIcon} alt="" /></span>Home</li>
                    <li><span><img src={discoverIcon} alt="" /></span>Home</li>
                    <li><span><img src={madeForYouIcon} alt="" /></span>Home</li>
                    <li><span><img src={dailyMixIcon} alt="" /></span>Home</li>
                    <li><span><img src={likedSongsIcon} alt="" /></span>Home</li>
                    <li><span><img src={favoriteArtistIcon} alt="" /></span>Home</li>
                    <li><span><img src={playlistIcon} alt="" /></span>Home</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigator;