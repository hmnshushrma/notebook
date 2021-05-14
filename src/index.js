import React from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import AppContainer from './views/'
import { Provider } from 'react-redux'
import store from './store/store'


const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
