import React from 'react';
import GIF from '../Gif/GIF';

function ListOfGifs  ({gifs}) {
    return (
        gifs.map(({id,title,url}) => 
        <GIF 
            key={id}
            id={id}
            title={title}
            url={url}
            />    
        )
    )
};

export default ListOfGifs;
