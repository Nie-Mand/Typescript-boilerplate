import { call, put, takeLatest, all } from 'redux-saga/effects'
import { Action } from '../helper';
import * as api from '../services/memo.service'
import { constants } from '../actions/memo.actions'

function* countAllSaga() {
  yield takeLatest(constants.countAll.request, function* () {
    try {
        const payload: { count: number } = yield call(api.countAll)
        yield put({
          type: constants.countAll.success,
          payload
        })
    } catch (e: any) {
      yield put({
        type: constants.countAll.failure,
        payload: { error: e.message }
      })
    }
})
}



export default function* () {
  yield all([
    countAllSaga(),
  ])
}