import {apiKey, API_URL} from './settings';

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    
    return data
  }
  
export default function getTrendingTerms () {
    const apiURL =`${API_URL}/trending/searches?api_key=${apiKey}`
    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
  }
