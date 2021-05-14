import {INCREMENT, DECREMENT} from './counter.types'

export const increaseCounter = (args) => {
  return {
    type: INCREMENT,
    data:"increment"
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT,
    data:"decrement"
  }
}
