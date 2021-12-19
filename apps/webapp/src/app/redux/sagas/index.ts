import { all } from 'redux-saga/effects'
import memoSaga from './memo.saga'
import authSaga from './auth.saga'


export default function* rootSaga() {
    yield all([
        memoSaga(),
        authSaga(),
    ])
}