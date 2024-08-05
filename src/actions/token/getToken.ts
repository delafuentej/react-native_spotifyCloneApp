/* eslint-disable prettier/prettier */
import {CLIENT_ID, CLIENT_SECRET, API_URL_TOKEN} from '@env';
import { AsyncStorageAdapter } from '../../config/adapters/async-storage';
import axios from 'axios';
import { TokenResponse } from '../../infrastructure/interface/token.response';




//function to obtain the token

export const getToken = async() =>{
    console.log('Client_id', CLIENT_ID);
    console.log('Client_Secret', CLIENT_SECRET);
    console.log('url_token',API_URL_TOKEN);
    // const params = new URLSearchParams();
    // params.append('grant_type', 'client_credentials');
    // params.append('client_id', CLIENT_ID);
    // params.append('client_secret', CLIENT_SECRET);
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    });
    const params = body.toString();

    console.log('body', body);
    console.log('params', params);
    try{
        const resp = await axios.post<TokenResponse>(API_URL_TOKEN, params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.log('resp', resp);
        const token = resp.data.access_token;
        await AsyncStorageAdapter.setItem('token',token);
        return token;


    }catch(error){
        console.log('Error getting the token', error);
        throw new Error('Error getting the token');
    }
}