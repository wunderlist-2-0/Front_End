import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAIL';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios.post('https://wunderlist-buildweek.herokuapp.com/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message })
    });
};
