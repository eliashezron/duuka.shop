import { fetchUtils } from 'react-admin';
import {useDispatch} from 'react-redux'
import { login } from "../Actions/userActions";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL } from '../Constants/userConstants';

 const url ="https://5000-blue-skunk-59vtk2x5.ws-eu03.gitpod.io"
const httpClient = fetchUtils.fetchJson;
const authProvider = {
    login: async(dispatch, loginpayload) => {
        const config = {
            method:"POST",
            body:JSON.stringify(loginpayload),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }
        try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${url}/login`, config);
		let data = await response.json();
        
		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}
		return;
	} catch (error) {
	dispatch({ type: 'LOGIN_ERROR', error: error.response && error.response.data.message ? error.response.data.message: error.message });
		// console.log(error);
	}
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