import { createAsyncAction } from '../helper'

export const constants = {
  countAll: createAsyncAction('COUNT_ALL'),
}

export const actions = {
    countAll: () => ({ type: constants.countAll.request }),
}
