import axios from 'axios';
import {logOut} from './auth';

export default function api() {
    const api = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    })

    // api.interceptors.response.use(response => response, error => {
    //     if (error.response.status === 401) {
    //         logOut()
    //
    //         return Promise.reject()
    //     }
    //
    //     return Promise.reject(error)
    // })

    return api
}
