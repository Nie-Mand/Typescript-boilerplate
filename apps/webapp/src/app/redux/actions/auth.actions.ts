import { createAsyncAction } from '../helper'

export const constants = {
    login: createAsyncAction('LOGIN'),
    getMe: createAsyncAction('GET_ME'),
    signup: createAsyncAction('SIGNUP'),
    logout: 'LOGOUT',
  }
  
  export const actions = {
    login: (email: string, password: string) => ({ type: constants.login.request, payload: {email, password} }),
    signup: (name: string, email: string, password: string) => ({ type: constants.signup.request, payload: {name, email, password} }),
    getMe: () => ({ type: constants.getMe.request }),
    logout: () => ({ type: constants.logout }),
  }
  