import { combineReducers } from 'redux'
import counter from './reducers/counter.reducer'
import memo from './reducers/memo.reducer'

export default  combineReducers({ counter, memo })
