import React from 'react';
import GIF from 'components/Gif/GIF';
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spiner'
import {Redirect} from 'wouter'
import {Helmet} from 'react-helmet'


export default function Detail ({params}) {
    const {gif, isLoading, isError} = useSingleGif({id:params.id})
    const title = gif ? gif.title: ''
    
    if (isLoading){
        return (
        <>
            <Helmet>
                <title>cargando</title>
            </Helmet>
            <Spinner/>
        </>
        )
    }
    if (isError) return <Redirect to='/404'/>
    if (!gif) return null

    return <>
        <Helmet>
            <title>{title} || Giffy</title>
        </Helmet>
        <h3 className='App-title'>{gif.title}</h3>
        <GIF {...gif}/>
    </>
};

