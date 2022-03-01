import React, {useCallback ,useRef,useEffect} from 'react'
import Spinner from 'components/Spiner/index'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from "react-helmet"


export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const {isNearScreen}= useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.lenght} resultados de ${keyword}` : '' 


  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1),1000
  ),[setPage])

  useEffect(function(){
    if (isNearScreen) debounceHandleNextPage()
  },[debounceHandleNextPage,isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
      <Helmet>
      <title>{title}</title>
      <meta name='description' content={title} />
      <meta name='rating' content='General' />
      </Helmet>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id='visor' ref={externalRef}></div>
      </>
    }
  </>
} 