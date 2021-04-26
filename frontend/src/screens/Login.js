import React,{useState} from 'react';
 
import styles from './login.css';

import { loginUser} from '../components/Actions'
import {useAuthState, useAuthDispatch } from '../components/AuthContext'
 
 
function Login(props) {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const dispatch = useAuthDispatch()
    const { loading, errorMessage } = useAuthState() //read the values of loading and errorMessage from context
 
 
 
 
    const handleLogin = async (e) => {
        e.preventDefault()
        loginUser(dispatch, {email, password})
         props.history.push('/admin')
    }
 
    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {
                    errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
                }
                <form >
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>login</button>
                </form>
            </div>
        </div>
    )
}
 
export default Login


// import  React, { useState } from 'react';
// import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

// const LoginPage = ({ theme }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = useLogin();
//     // const notify = useNotify();
//     const submit = e => {
//         e.preventDefault();
//         // will call authProvider.login({ email, password })
//         login({ email, password }).catch((error) =>
//             console.error('Invalid email or password')
           
//         );
//     };

//     return (
//         <ThemeProvider theme={createMuiTheme(defaultTheme)}>
//             <form onSubmit={submit}>
//                 <input
//                     name="email"
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                 />
//             </form>
//             <Notification />
//         </ThemeProvider>
//     );
// };

// export default LoginPage;