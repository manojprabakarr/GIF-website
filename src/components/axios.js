import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.giphy.com/v1/",    
});


export default instance;