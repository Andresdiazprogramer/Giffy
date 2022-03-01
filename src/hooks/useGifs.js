import {useState,useEffect, useContext} from 'react';
import GifsContext  from '../context/GifsContext';
import getGifs from '../services/getGifs';


const INITIAL_PAGE =0

export function useGifs ({keyword} = {keyword:null}){
const [loading, setLoading] = useState(false)
const [loadingNextPage,setLoadingNextPage] = useState(false)

const [page,setPage]= useState(INITIAL_PAGE)
const {gifs,setGifs} = useContext(GifsContext)


const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

useEffect(function () {
  setLoading(true)

  getGifs({keyword: keywordToUse})
  .then(gifs=>{
    setGifs(gifs)
    setLoading(false)
        localStorage.setItem('lasKeyword',keyword)
  })
},[keyword,keywordToUse,setGifs])

useEffect(function () {
  if (page===INITIAL_PAGE || !loading) return

  setLoadingNextPage(true)
  
  getGifs({keyword:keywordToUse,page})
  .then(nextGifs=>{
    setGifs(prevGifs=> prevGifs.concat(nextGifs))
  setLoadingNextPage(true)

  })
},[keywordToUse, page, setGifs])

return{loading,loadingNextPage,gifs,setPage}
}
