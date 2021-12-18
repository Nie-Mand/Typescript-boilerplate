import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = (_actions: any) => {
  const dispatch = useDispatch()
  const actions = bindActionCreators({ ..._actions }, dispatch)
  return actions
}
