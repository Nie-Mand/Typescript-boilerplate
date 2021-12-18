import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import { countAllSaga } from './sagas/memo.saga'

const sagaMw = createSagaMiddleware()

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMw)
  )  
)



sagaMw.run(countAllSaga)

