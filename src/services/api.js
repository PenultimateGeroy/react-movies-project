import axios from 'axios'

import { APP_KEY, BASE_URL } from '../config/api_config'

export const getMovies = async category => {
  const url = `${BASE_URL}/movie/${category}?api_key=${APP_KEY}`

  try {
    // const response = await axios.get(url, {
    //   params: {
    //     app_key: APP_KEY
    //   }
    // })
    
    const response = await axios.get(url)

    const movies = response.data.results

    return movies
  } catch (error) {
    throw error
  }
}

export const getTVShows = async category => {
    const url = `${BASE_URL}/tv/${category}?api_key=${APP_KEY}`

    try {
      // const response = await axios.get(url, {
      //   params: {
      //     app_key: APP_KEY
      //   }
      // })
  
      const response = await axios.get(url)

      const tvShows = response.data.results
  
      return tvShows
    } catch (error) {
      throw error
    }
  }


export const getTitles = async (searchType, searchedTitle) => {
    const url = `${BASE_URL}/search/${searchType}?api_key=${APP_KEY}&query=${searchedTitle}`

  try {
    // const response = await axios.get(url, {
    //   params: {
    //     query: searchedTitle,
    //     app_key: APP_KEY
    //   }
    // })

    const response = await axios.get(url)

    const results = response.data.results

    return results
  } catch (error) {
    throw error
  }
}
