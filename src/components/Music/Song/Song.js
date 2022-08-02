import React from 'react';

const Song = ({ song, index }) => {
    const {singerImg, title, playingNumber, time, year} = song;
    return (
        <tr >
            <th className='' scope="col">{index + 1}</th>
            <th className=''scope="col"><img  src={singerImg} alt="" /></th>
            <th className='' scope="col">{title}</th>
            <th className='px-2' scope="col">{playingNumber}</th>
            <th className='px-2' scope="col">{time}</th>
            <th className='px-2' scope="col">{year}</th>
        </tr>
    );
};

export default Song;