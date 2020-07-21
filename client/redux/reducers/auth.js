import Cookies from 'universal-cookie'

import { history, getSocket } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'
const CREATE_NEW_USER = 'CREATE_NEW_USER'
const CLEAR_FORM = 'CLEAR_FORM'
const SHOW_MESSAGE = 'SHOW_MESSAGE'

const cookies = new Cookies()
const initialState = {
  email: '',
  password: '',
  token: cookies.get('token'),
  user: {},
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, email: action.email }
    }

    case LOGIN: {
      return { ...state, token: action.token, password: '', user: action.user }
    }

    case SHOW_MESSAGE: {
      return { ...state, messages: [...state.messages, action.message] }
    }

    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case CLEAR_FORM: {
      return { ...state, password: '' }
    }
    default:
      return state
  }
}

export function updateLoginField(email) {
  return { type: UPDATE_LOGIN, email }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function signIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user })
        history.push('/chat')
      })
  }
}

export function signUp() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    fetch('/api/v1/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((r) => r.json())
      .then(() => {
        dispatch({ type: CREATE_NEW_USER })
        // window.location.href = '/login'
        history.push('/login')
        dispatch({ type: CLEAR_FORM })
      })
  }
}

export function clearForm() {
  return { type: CLEAR_FORM }
}

export function trySignIn() {
  return (dispatch) => {
    try {
      fetch('/api/v1/auth')
        .then((r) => r.json())
        .then((data) => {
          setTimeout(() => {
            getSocket().send(JSON.stringify({ type: 'SYSTEM_WELCOME', email: data.user.email }))
          }, 1000)
          dispatch({ type: LOGIN, token: data.token, user: data.user })
          history.push('/chat')
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }
}

export function tryGetUserInfo() {
  return () => {
    try {
      fetch('/api/v1/user-info')
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => err)
    } catch (err) {
      console.log(err)
    }
  }
}
