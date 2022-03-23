import React from 'react';
import GIF from '../Gif/GIF';
import './styles.css'

function ListOfGifs  ({gifs}) {
    return <div className='ListOfGifs'>
        {
        gifs.map(({id,title,url}) => 
        <GIF 
            key={id}
            id={id}
            title={title}
            url={url}
            />    
        )
    }
    </div>
}

export default ListOfGifs;
