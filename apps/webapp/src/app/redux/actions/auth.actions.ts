import { createAsyncAction } from '../helper'

export const constants = {
    login: createAsyncAction('LOGIN'),
    signup: createAsyncAction('SIGNUP'),
    logout: 'LOGOUT',
  }
  
  export const actions = {
    login: (email: string, password: string) => ({ type: constants.login.request, payload: {email, password} }),
    signup: () => ({ type: constants.signup.request }),
    logout: () => ({ type: constants.logout }),
  }
  