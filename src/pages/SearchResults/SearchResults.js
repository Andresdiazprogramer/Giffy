import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spiner/index';
import {useGifs} from '../../hooks/useGifs';

export default function SearchResults ({params}) {
  const {keyword} = params
  const {loading,gifs} = useGifs({keyword})

  return <>
  { loading
    ?<Spinner/>
    : <ListOfGifs gifs={gifs}/>
  }
  </>
}