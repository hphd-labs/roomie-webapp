import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import {browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL='http://localhost:3000'

export function signinUser({email, password}, history){
  console.log("HERE!");
  return function(dispatch){
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      //If request is good ...
      // -- Update state to indicate user is auth'd
      dispatch({ type: AUTH_USER});
      // -- Save JWT token
      localStorage.setItem('token', response.data.token);
      // -- Redirect to the route '/feature'
      console.log("REDIRECT!");
      history.push('/');
    })

    // .catch(()=> {
    //   //If request is bad ....
    //   // -- Show an error to the user.
    //   dispatch(authError('Bad Login Info'));
    // })
  }
}
