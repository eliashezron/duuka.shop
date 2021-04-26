const ROOT_URL = 'https://5000-olive-koala-l50544zt.ws-eu03.gitpod.io/users';
 
export async function loginUser(dispatch, loginPayload) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();

		if (data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}
		return;
	} catch (error) {
	dispatch({ type: 'LOGIN_ERROR', error: error.response && error.response.data.message ? error.response.data.message: error.message });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}