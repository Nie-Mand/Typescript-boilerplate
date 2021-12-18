import { all } from 'redux-saga/effects'
import memoSaga from './memo.saga'


export default function* rootSaga() {
    yield all([
        memoSaga(),
    ])
}