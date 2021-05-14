import { PRODUCT_UPDATED , PRODUCT_ADDED } from './types' // storekeeper

const INITIAL_STATE = {}

const productReducer = ( state = INITIAL_STATE , action) => {
  console.log(action,'action')
   switch(action.type) {
     case PRODUCT_ADDED: {
       console.log('added')
       return { ...state, product:action.payload }
     }
     case PRODUCT_UPDATED:{
         console.log('UPDATED')
       return { ...state, product:action.payload }
     }
     default: return state
   }
 }

 export default productReducer
