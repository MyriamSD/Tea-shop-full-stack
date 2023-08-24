import { createSlice } from "@reduxjs/toolkit";

const initialStoreDataState = {
    products: [],
    newProduct: {},
    
}

const storeDataSlice = createSlice({
    name: 'products',
    initialState: initialStoreDataState,
    reducers: {
        getProducts(state, action){
            state.products = action.payload.products

            // console.log('are we getting anywhere')
            // console.log(state.products)
        },
        addProduct(state, action){
            const newProductInstance = action.payload
            state.newProduct.push({
                price: newProductInstance.price,
                qty: newProductInstance.qty,
                description: newProductInstance.description,
                name: newProductInstance.name,
                imageUrl: newProductInstance.imageUrl
            });
            console.log(state.newProduct)
            
        }
    }
})

export const getStoreData = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const response = await fetch('http://localhost:5000')

            if(!response.ok){
                throw new Error('Could not load products')
            }

           
            const data = await response.json()

            const transformedData = data.results.map(data => {
                      return {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        image: data.imageUrl,
                        qty: data.qty
                      };
                    })

            return transformedData           
        }

        try {
            const productData = await getRequest()
            dispatch(storeDataActions.getProducts({
                products: productData
            }))

        }catch{}
        
    }
}

export const sendNewProductData = (newProduct) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            body: JSON.stringify({
                price: newProduct.price,
                qty: newProduct.qty,
                description: newProduct.description,
                name: newProduct.name,
                imageUrl: newProduct.imageUrl

            })
            });


            if(!response.ok) {
            throw new Error('Sending cart data failed')
            }
        };

        
        try{
            await sendRequest()
    

        } catch (error) {
            throw new Error('Oops')

        }            
}



}

export const storeDataActions = storeDataSlice.actions;
export default storeDataSlice.reducer;