import axios from "axios"

export const axiosInstance = axios.create({
    // baseURL:    'http://localhost:5000/api'
    baseURL:'hhttps://savana-datingapp-backend.onrender.com/api' ,
    withCredentials:true
}) 



// https://savana-datingapp-backend.onrender.com/api