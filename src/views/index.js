import React, { Component } from 'react'

class FormContainer extends Component {
  handleClick = e => {
    console.log('hello')
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>himashu</button>
      </React.Fragment>
    )
  }
}

export default FormContainer
