import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {
    cart: [],
    totalItems: 0,
    cartTotalPrice: 0,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action){
            const item = action.payload;
            const inCart = state.cart.find((product) => product.id === item.id) 
            state.totalItems++
            
            
            
            
            if(!inCart) {
                
                state.cart.push({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    image: item.image,
                    totalPrice: item.price,
                    quantity: 1,
                    
                });
                state.cartTotalPrice = state.cartTotalPrice + Number(item.price)
                console.log(item.price)
                
            } else {
                inCart.quantity++;
                inCart.totalPrice = inCart.price * inCart.quantity;
                state.cartTotalPrice = state.cartTotalPrice + Number(inCart.price)
            }   
            
            
        },
        removeItem(state, action){
            const id = action.payload;
            const inCart = state.cart.find((item) => item.id === id.id)
            state.totalItems--;
            state.cartTotalPrice = state.cartTotalPrice - Number(inCart.price)

                if (inCart.quantity === 1) {
                    state.cart = state.cart.filter((item) => item.id !== id.id)
                    
                }else {
                    inCart.quantity--;
                    inCart.totalPrice = inCart.price * inCart.quantity;

                }
        },
        deleteItem(state, action){
            const id = action.payload;
            const inCart = state.cart.find((item) => item.id === id.id)
            state.totalItems = state.totalItems - inCart.quantity
            state.cart = state.cart.filter((item) => item.id !== id.id)
            state.cartTotalPrice = state.cartTotalPrice - Number(inCart.totalPrice)
            
        }


    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;