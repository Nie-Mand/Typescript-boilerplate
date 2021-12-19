import { call, put, takeLatest, all } from 'redux-saga/effects'
import { Action } from '../helper';
import * as api from '../services/auth.service'
import { constants } from '../actions/auth.actions'
import { push } from "redux-first-history"

function* loginSaga() {
  yield takeLatest(constants.login.request, function* (action: Action) {
    try {
        const payload: { count: number } = yield call(api.login, action.payload)
        yield put({
          type: constants.login.success,
          payload
        })
        yield put(push('/hi'))
    } catch (e: any) {
      yield put({
        type: constants.login.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message }
      })
    }
  })
}

function* signupSaga() {
  yield takeLatest(constants.signup.request, function* (action: Action) {
    try {
        const payload: { count: number } = yield call(api.signup, action.payload)
        yield put({
          type: constants.signup.success,
          payload
        })
        yield put(push('/login'))
    } catch (e: any) {

      yield put({
        type: constants.signup.failure,
        payload: { error: e.response.data.error ? e.response.data.error : e.response.statusText }
      })
    }
  })
}

function* getMeSaga() {
  yield takeLatest(constants.getMe.request, function* () {
    try {
        const payload: { me: any } = yield call(api.getMe)
        yield put({
          type: constants.getMe.success,
          payload
        })
    } catch (e: any) {
      yield put({
        type: constants.getMe.failure,
        payload: { error: e.response.data.error ? e.response.data.error : e.response.statusText }
      })
    }
  })
}

function* logoutSaga() {
  yield takeLatest(constants.logout, function* () {
    yield put(push('/login'))
  })
}


export default function* () {
  yield all([
    loginSaga(),
    signupSaga(),
    logoutSaga(),
    getMeSaga(),
  ])
}