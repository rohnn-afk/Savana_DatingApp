import axios from "axios"

export const axiosInstance = axios.create({
    // baseURL:    'http://localhost:5000/api'
    baseURL:'http://localhost:5000/api' ,
    withCredentials:true
}) 



// https://savana-datingapp-backend.onrender.com/api