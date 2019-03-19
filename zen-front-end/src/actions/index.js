import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAIL';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('https://wunderlist-buildweek.herokuapp.com/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message })
    });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios.post('https://wunderlist-buildweek.herokuapp.com/register', creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response.message })
    });
};

let nextTodoId = 0

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  payload: text
})

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const UPDATE_TITLE = 'UPDATE_TITLE';
export function updateTitle(newTitle) {
  return {
    type: 'UPDATE_TITLE',
    payload: newTitle
  }
}
