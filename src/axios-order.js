import axios from 'axios'

export const instance = axios.create ({
    baseURL: 'https://api-front-end-challenge.buildstaging.com'
})

export default instance; 