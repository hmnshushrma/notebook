import {INCREMENT, DECREMENT} from './counter.types'

const INITIAL_STATE = 0

const counterReducer = ( state = INITIAL_STATE , action) => {
   switch(action.type) {
     case INCREMENT: {
        console.log('here inc', action.data)
       return { ...state, count: state.count + 1, data: action.data }
     }
     case DECREMENT:{
         console.log('here dec')
       return { ...state, count: 'dfkjf' }
     }
     default: return state
   }
 }

 export default counterReducer
