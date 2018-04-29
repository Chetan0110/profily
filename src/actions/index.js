import axios from 'axios';
import { LOGIN_SUCCESS, GET_USER_INFO } from '../types';


const LOGIN_URL = 'https://staging.urbanpiper.com/api/v1/auth/me/';

export function authenticateUser(user_name, password) {

    const BasicAuth = 'Basic KzkxOTgzMzAxMDQzMF9fNzM1NzQ0Nzc6MTIzNDU2';
    const response = axios.get(LOGIN_URL, {
        headers: { 'Authorization': BasicAuth }
    })

    return {
        type: LOGIN_SUCCESS,
        payload: response
    }
}

//Kairos
export function detectImage(selectedFileEncodedName) {

    const URL = 'https://api.kairos.com/detect';
    const APP_ID = 'ef15da04'
    const APP_KEY = '2dfab520079dc6bef8b9ba316c5d3394';

    return {
        type: GET_USER_INFO,
        payload: new Promise((resolve, reject) => {

            var request = new XMLHttpRequest();
            request.open('POST', URL);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('app_id', APP_ID);
            request.setRequestHeader('app_key', APP_KEY);

            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (JSON.parse(this.response).images) {

                        resolve(JSON.parse(this.response));
                    }
                    if (JSON.parse(this.response).Errors) {
                        reject(JSON.parse(this.response));
                    }
                }
            };

            var body = {
                'image': selectedFileEncodedName,
                'selector': 'ROLL'
            };

            request.send(JSON.stringify(body));
        })
    }
}