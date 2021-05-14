import React , {Fragment} from 'react'
import { connect } from 'react-redux'

import { increaseCounter, decrementCounter } from '../store/counter/counter.actions'

function Counter(props) {
  const { count,
    increase,
    decrement
  } = props
  return (
    <Fragment>
      <p> Counter : { count || 0 } </p>
      <button onClick={() => increase()}> Increment </button>
      <button onClick={() => decrement()}> Decrement </button>
    </Fragment>
  )
}

const mapStateToProps = ( state ) => {
  return {
    count: state.counter.count
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    increase: () => dispatch(increaseCounter()),
    decrement: () => dispatch(decrementCounter())
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Counter)
