import axios from 'axios';
export const SUBMIT_LOGIN = 'submit_login';

const ROOT_URL='http://localhost:8080/'

//Submit the user credentials from the login form.
export function submitLogin(values){
    const request = axios.post(`${ROOT_URL}/auth`, values);
    return {
      type: SUBMIT_LOGIN,
      payload: request
    }
}
