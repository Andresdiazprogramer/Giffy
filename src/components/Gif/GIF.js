import React from 'react';
import {Link} from 'wouter';
import './Gif.css'

const GIF = ({title, url, id}) => {
    return (
        <div className="Gif">
        <Link to={`/gif/${id}`} className='Gif-link'>
            <img loading='lazy' alt={title} src={url}/> 
        </Link>
        </div>
    )
};

export default GIF;
