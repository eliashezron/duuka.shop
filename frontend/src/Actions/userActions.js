import axios from 'axios'
import { USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS, 
        USER_LOGIN_FAIL,
        USER_LOGOUT,
        USER_REGISTER_REQUEST, 
        USER_REGISTER_SUCCESS, 
        USER_REGISTER_FAIL } from "../Constants/userConstants"

export const register = (name, email, password) => async(dispatch)=>{
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'content-Type':'application/json'
            }
        }
        const {data} = await axios.post('https://5000-peach-iguana-gphbs0pv.ws-eu03.gitpod.io/', {name, email, password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const login = (email, password) => async(dispatch)=>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'content-Type':'application/json'
            }
        }

        const{data}= await axios.post('https://5000-peach-iguana-gphbs0pv.ws-eu03.gitpod.io/login', 
        {email, password}, config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    
    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message
        })
    }
}
export const logout = () => (dispatch)=> {
 localStorage.removeItem('userInfo')
 dispatch({type: USER_LOGOUT})
 document.location.href = '/login'
}