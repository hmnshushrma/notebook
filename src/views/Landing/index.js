import React, { Component } from 'react'
import './landing.scss'
import LandingComponent from './Components/Landing'
class LandingContainer extends Component {
  render () {
    return (
      <React.Fragment>
        <LandingComponent />
      </React.Fragment>
    )
  }
}

export default LandingContainer
