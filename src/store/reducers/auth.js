
const actions = {
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
}

const initialState = {
  token: '',
  name: '',
  id: '',
  email: ''
}

export default function auth(state = initialState, action) {
  const { type } = action
  const { LOGIN_USER, LOGOUT_USER } = actions

  switch (type) {
    case LOGIN_USER:
      return {
        userData: action.userData
      }

    case LOGOUT_USER:
      return initialState

    default:
      return state
  }
}