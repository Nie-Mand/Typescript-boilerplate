import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import saga from './sagas'

const sagaMw = createSagaMiddleware()

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMw)
  )  
)



sagaMw.run(saga)

