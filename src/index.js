import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './views/login/'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Route exact path='/' component={Login} />
        </Router>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
