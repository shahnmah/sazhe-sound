import React from 'react';
import { BiChevronRight, BiChevronLeft, BiSearch } from "react-icons/bi";
import musicBgImg from '../../../assets/images/music-bg.png'
import './MusicHeader.css'

const MusicHeader = () => {
    return (
        <div className='music-header-container px-3 mb-5 mt-4'>
            <div className="music-search-container d-flex">
                <div className="music-slider">
                    <BiChevronLeft/>
                    <BiChevronRight/>
                </div>
                <div className="music-search-bar">
                    <input className='rounded-pill' type="search" placeholder='Taylor Swift'/>
                    <span><BiSearch/></span>
                </div>
            </div>
            <div className="music-img-container mt-5">
                <img className='img-fluid' src={musicBgImg} alt="music-bg" />
            </div>
        </div>
    );
};

export default MusicHeader;