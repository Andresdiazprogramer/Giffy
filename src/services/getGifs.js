import {apiKey, API_URL} from './settings';

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    }
    return []
  }
  
export default function getGifs ({limit = 5,keyword='', page=0}) {
    const apiURL =`${API_URL}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page *limit}&rating=g&lang=en`
    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
  }

