import axios from 'axios'

export const api = axios.create({
    // baseURL: 'http://cfd-reactjs.herokuapp.com/' // 1
    baseURL: import.meta.env.VITE_HOST
})

api.interceptors.response.use((response) => {
    return response.data
})