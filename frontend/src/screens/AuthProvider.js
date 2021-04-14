import axios from 'axios'
import {useDispatch} from 'react-redux'
import { login } from "../Actions/userActions";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL } from '../Constants/userConstants';

 

const authProvider = {
    //  login: async({ email, password }) =>{
    //      try{
    //     const config = {headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password })}
    //     const{data}= await axios.post('https://5000-purple-pike-vzmhz2fm.ws-eu03.gitpod.io/login', config)
    //     .then((res) => res.json())
    //     .catch(error => {
    //         console.error('Error:', error);
    //     })
    //      }catch(error){
    //          throw new Error(error.response && error.response.data.message ?  error.response.data.message : error.message)
    //      }
            
    // },
    // called when the user attempts to log in
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
export default authProvider