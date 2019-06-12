import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

class Welcome extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 className='heading'>
          Hello World from React boilerplate
          <p className=''>wkjbfksjb</p>
        </h1>
        <h1 className='heading'>
          Hello World from React boilerplate
          <p className=''>
            wkjbfksjb
            <span>Himanshu</span>
          </p>
          API url {process.env.API_URL}
        </h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'))
