import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Action } from '../helper';
import * as api from '../services/memo.service'
import { constants } from '../actions/memo.actions'

/* 
  takeLatest: cancels request if theres already one
  takeEvery: always make the request 
*/

export function* countAllSaga() {
  yield takeLatest(constants.countAll.request, function* (action: Action) {
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
