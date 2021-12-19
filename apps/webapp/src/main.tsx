import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import App from './app/index'
import { history } from './app/redux/store'

ReactDOM.render(
  <StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
