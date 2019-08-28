import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import FormContainer from './views/'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormContainer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
