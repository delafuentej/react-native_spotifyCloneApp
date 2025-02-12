/* eslint-disable prettier/prettier */
import {API_URL_TOKEN} from '@env';
import axios from 'axios';
import {AsyncStorageAdapter} from '../adapters/async-storage';
import { getAccessToken } from '../../actions/token/getAccessToken';


// 1. Create a configured axios instance
export const spotifyApi = axios.create({
    baseURL: API_URL_TOKEN,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// 2. Middleware for adding the access token to requests

spotifyApi.interceptors.request.use(
    async(config) =>{
        let token = await AsyncStorageAdapter.getItem('token');
        
        if(!token){
            await getAccessToken();
        }
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log('config', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)