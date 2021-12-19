import { combineReducers } from 'redux'
import memo from './reducers/memo.reducer'
import auth from './reducers/auth.reducer'
import { routerReducer as router } from './router.redux'


export default  combineReducers({ auth, memo, router })
