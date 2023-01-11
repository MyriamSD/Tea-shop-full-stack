import { configureStore } from '@reduxjs/toolkit'
import storeDataReducer from './store-data-slice'
import cartReducer from './cart-slice'
import adminLoginReducer from './admin-login-slice'

const store = configureStore({
    reducer: {
        products: storeDataReducer,
        cart: cartReducer,
        adminAuth: adminLoginReducer
    }
})

export default store