import React, { useEffect, useState } from 'react';
import Song from '../Song/Song';
// import singerImg from '';

const Songs = () => {
    const [songLists, setSongLists] = useState([])
    useEffect( ()=>{
        fetch('songs.json')
        .then(res => res.json())
        .then(data => setSongLists(data))
    },[])
    return (
        <div className='song-main-container px-3 mt-3'>
        <div className="song-header-container d-flex justify-content-between align-items-center">
            <h3>Popular</h3>
            <p className='fw-bold text-muted' style={{paddingRight: '9%'}}><small>See ALl</small></p>
        </div>
        <div className="song-container">
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">TITLE</th>
                        <th scope="col">PLAYING</th>
                        <th  scope="col">TIME</th>
                        <th scope="col">ALBUM</th>
                    </tr>
                </thead>
                <tbody className='text-muted'>
                    {
                        songLists.map((song , index) => <Song key={song.id} song={song} index={index}/>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Songs;