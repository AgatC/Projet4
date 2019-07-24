import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { LOGIN, LOGOUT } from '../Action/types';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.authorization = `Bearer ${token}`;
}
const initialState = token ? jwtDecode(token) : null;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
