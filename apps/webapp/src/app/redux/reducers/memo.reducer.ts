import produce from 'immer'
import { constants } from '../actions/memo.actions'
import { Action, AsyncState } from '../helper';

const initialState: State = {
  countAll: {
    data: null,
    loading: false,
    error: null
  },
  getMyMemos: {
    data: [],
    loading: false,
    error: null
  },
}

export default (state: State = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.countAll.request:
          draft.countAll.loading = true
          draft.countAll.error = null
        break

        case constants.countAll.failure:
          draft.countAll.error = action.payload.error
          draft.countAll.loading = false
          console.error(action.payload.error);
          break

        case constants.countAll.success:
          draft.countAll.loading = false
          draft.countAll.data = action.payload.count
        break


        case constants.getMyMemos.request:
          draft.getMyMemos.loading = true
          draft.getMyMemos.error = null
        break

        case constants.getMyMemos.failure:
          draft.getMyMemos.error = action.payload.error
          draft.getMyMemos.loading = false
          console.error(action.payload.error);
          break

        case constants.getMyMemos.success:
          draft.getMyMemos.loading = false
          draft.getMyMemos.data = action.payload.memos
        break


        
      default:
        break
    }
  })

type State = {
    countAll: AsyncState<number | null>
    getMyMemos: AsyncState<any[] | null>
}

