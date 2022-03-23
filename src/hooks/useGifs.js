import {useState,useEffect, useContext} from 'react';
import GifsContext  from '../context/GifsContext';
import getGifs from '../services/getGifs';


const INITIAL_PAGE =0

export function useGifs ({keyword , rating} = {keyword:null}) {
const [loading, setLoading] = useState(false)
const [loadingNextPage,setLoadingNextPage] = useState(false)

const [page,setPage]= useState(INITIAL_PAGE)
const {gifs,setGifs} = useContext(GifsContext)


const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

useEffect(function () {
  setLoading(true)

  getGifs({keyword: keywordToUse, rating})
  .then(gifs=>{
    setGifs(gifs)
    setLoading(false)
    localStorage.setItem('lastKeyword',keyword)
  })
},[keyword,keywordToUse,rating,setGifs])

useEffect(function () {
  if (page===INITIAL_PAGE) return

  setLoadingNextPage(true)
  
  getGifs({keyword:keywordToUse,rating, page})
  .then(nextGifs=>{
    setGifs(prevGifs=> prevGifs.concat(nextGifs))
    setLoadingNextPage(false)

  })
},[keywordToUse, page, rating, setGifs])

return{loading,loadingNextPage,gifs,setPage}
}
