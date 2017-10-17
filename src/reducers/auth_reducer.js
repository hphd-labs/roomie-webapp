//Import our type definitions
import { AUTH_USER, AUTH_ERROR }  from '../actions/types';

//Initial authentication state
var initialState = {
  authenticated: false
};

export default function(state = Object.assign({}, initialState), action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', authenticated: true }
    case AUTH_ERROR:
      return { state, error: action.payload }
  }
  return state;
}
