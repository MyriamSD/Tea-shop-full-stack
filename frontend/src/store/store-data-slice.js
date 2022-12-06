import { createSlice } from "@reduxjs/toolkit";

const initialStoreDataState = {
    products: []
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

export const storeDataActions = storeDataSlice.actions;
export default storeDataSlice.reducer;