import { configureStore } from '@reduxjs/toolkit'
import storeDataReducer from './store-data-slice'
import cartReducer from './cart-slice'

const store = configureStore({
    reducer: {
        products: storeDataReducer,
        cart: cartReducer
    }
})

export default store