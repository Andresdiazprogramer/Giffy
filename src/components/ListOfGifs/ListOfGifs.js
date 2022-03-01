import React from 'react';
import GIF from '../Gif/GIF';
import './styles.css'

function ListOfGifs  ({gifs}) {
    return <div className='ListOfGifs'>
        {
        gifs.map(({id,title,url, ...restoOfGifs}) => 
        <GIF 
            key={id}
            id={id}
            title={title}
            url={url}
            extraInfo={restoOfGifs}
            />    
        )
    }
    </div>
}

export default ListOfGifs;
