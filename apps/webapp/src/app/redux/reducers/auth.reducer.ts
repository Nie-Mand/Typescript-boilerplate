import produce from 'immer'
import { constants } from '../actions/auth.actions'
import { Action, AsyncState } from '../helper';

const initialState: State = {
  isAuth: localStorage.getItem('token') ? true : false,
  login: {
    data: null,
    loading: false,
    error: null
  },
  signup: {
    data: null,
    loading: false,
    error: null
  },
  getMe: {
    data: null,
    loading: false,
    error: null
  },
  token: localStorage.getItem('token'),
}

export default (state: State = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
        
      case constants.login.request:
          draft.login.loading = true
          draft.login.error = null
        break

        case constants.login.failure:
          draft.login.error = action.payload.error
          draft.login.loading = false
          draft.token = null
          draft.isAuth = false
          console.error(action.payload.error)
          localStorage.removeItem('token')
          break
          
          case constants.login.success:
            draft.login.loading = false
            draft.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
            draft.isAuth = true
        break


        case constants.signup.request:
          draft.signup.loading = true
          draft.signup.error = null
        break

        case constants.signup.failure:
          draft.signup.error = action.payload.error
          draft.signup.loading = false
          console.error(action.payload.error);
          break

        case constants.signup.success:
          draft.signup.loading = false
        break


        case constants.getMe.request:
          draft.getMe.loading = true
          draft.getMe.error = null
        break

        case constants.getMe.failure:
          draft.getMe.error = action.payload.error
          draft.getMe.loading = false
          console.error(action.payload.error);
          draft.token = null
          draft.isAuth = false
          localStorage.removeItem('token')
          break

        case constants.getMe.success:
          draft.getMe.loading = false
          draft.getMe.data = action.payload.me
        break




        case constants.logout:
          draft.token = null
          draft.isAuth = false
          localStorage.removeItem('token')
        break

      default:
        break
    }
  })

type State = {
    isAuth: boolean
    login: AsyncState<null>
    signup: AsyncState<null>
    getMe: AsyncState<any | null>
    token: string | null
}

