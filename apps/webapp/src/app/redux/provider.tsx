import { Provider } from 'react-redux'
import store from './store'

export default (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>
}

type Props = {
  children: any
}
