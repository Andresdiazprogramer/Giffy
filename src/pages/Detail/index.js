import React,{useContext} from 'react';
import GIF from '../../components/Gif/GIF';
// import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext';


function Detail ({params}) {

    const {gifs}= useContext(GifsContext)
    console.log(gifs);
    
    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
        )
    console.log(gif);

    return <GIF {...gif}/>;
};

export default Detail;
