const API_KEY="gif apikey";

const request={ 
    Trending:`stickers/trending?api_key=${API_KEY}&limit=50&rating=g`,
    Human:`/gifs/trending?api_key=${API_KEY}&limit=50&rating=g`


}

export default request