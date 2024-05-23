import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const shopSlice = createSlice({
    name: 'storeKeeper',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const shopItems = {
                id: uuidv4(),
                warehouseStack: action.payload
            }
            state.push(shopItems)
        }
    }
})

export const { addItem } = shopSlice.actions
export default shopSlice.reducer
