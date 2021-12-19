import { createAsyncAction } from '../helper'

export const constants = {
  countAll: createAsyncAction('COUNT_ALL'),
  getMyMemos: createAsyncAction('GET_MY_MEMOS'),
  update: createAsyncAction('UPDATE_MEMO'),

}

export const actions = {
    countAll: () => ({ type: constants.countAll.request }),
    getMyMemos: () => ({ type: constants.getMyMemos.request }),
    update: () => ({ type: constants.update.request }),
}
