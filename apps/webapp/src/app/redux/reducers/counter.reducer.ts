import produce from 'immer'
import { constants } from '../actions/counter.actions'

const initialState: State = {
  count: 0,
}

export default (state: State = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.increment:
        draft.count++
        break

      case constants.decrement:
        draft.count--
        break

      default:
        break
    }
  })

type State = {
  count: number
}

type Action = {
  type: string
  payload: any
}
