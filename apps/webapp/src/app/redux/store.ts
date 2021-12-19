import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware, createReduxHistory } from './router.redux'
import reducer from './reducer'
import saga from './sagas'

const sagaMw = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMw, routerMiddleware)
  )  
)

export const history = createReduxHistory(store)

sagaMw.run(saga)

export default store
