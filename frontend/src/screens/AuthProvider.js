import { fetchUtils } from 'react-admin';
import {useDispatch} from 'react-redux'
import { login } from "../Actions/userActions";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL } from '../Constants/userConstants';

 const url =" https://5000-copper-bird-kmvohk2j.ws-eu03.gitpod.io"
const httpClient = fetchUtils.fetchJson;
const authProvider = {
    login: ({email, password}) => {
        const config = {
            method:"POST",
            body:JSON.stringify({email, password}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }
        const {data} = httpClient(url,{email, password}, config).then(({json})=>(
            {data: json}
        
        ),
        localStorage.setItem('UserInfo', JSON.stringify(data)))
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