import React from 'react';
import getAlbumCover from '../util/getAlbumCover';
import getArtistsNames from '../util/getArtistsNames';


function Card({ track }) {
    console.log(track)
    const { name, album, external_urls, artists } = track;
    return(
        <div className="card">
            <a href={external_urls.spotify} target="_blank">
                <img src={getAlbumCover(album)} alt={`${name} album cover`} />
            </a>
            <b>{name}</b>- {getArtistsNames(artists)}
        </div>
    );
}

export default Card;
