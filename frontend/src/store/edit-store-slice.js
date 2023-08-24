import {createSlice} from '@reduxjs/toolkit'



// const initialProductsState = {
//     products: [],
//     totalItems: 0,
//     }
    
//     const cartSlice = createSlice({
//         name: 'cart',
//         initialState: initialCartState,
//         reducers: {
//             replaceCart(state, action) {
//                 state.totalItems = action.payload.totalItems;
//                 state.cart = action.payload.cart;
//                 console.log(state.cart)
//             },
//             addItems(state, action){
//                 const newItem = action.payload; // this represents the extra data we will receive meaning price, id...etc
//                 const inCart = state.cart.find((item) => item.id === newItem.id); // use fid function to return the first value that matches the condition. if no value matches undefines is retgurned which is falsey
//                 state.totalItems++
//                 state.changed = true
//                 if(!inCart) {
//                     state.cart.push({
//                         id: newItem.id,
//                         price: newItem.price,
//                         quantity: 1,
//                         totalPrice: newItem.price,
//                         name: newItem.title,
//                     });
//                     console.log(newItem)
//                 } else {
//                     inCart.quantity++;
//                     inCart.totalPrice = inCart.totalPrice + newItem.price;
//                 }   
//             },
//             removeItem(state, action){
//                 const id = action.payload;
//                 const inCart = state.cart.find((item) => item.id === id.id)
//                 state.totalItems--;
//                 state.changed = true

//                 if (inCart.quantity === 1) {
//                     state.cart = state.cart.filter((item) => item.id !== id.id)
//                 }else {
//                     inCart.quantity--;
//                     inCart.totalPrice = inCart.totalPrice - inCart.price;

//                 }

//             },
    
//         }
//     })
    
    
//     export const cartActions = cartSlice.actions;
//     export default cartSlice.reducer;