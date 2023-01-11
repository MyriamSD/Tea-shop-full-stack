import { createSlice } from "@reduxjs/toolkit";

const initialAdminAuthState = {
    adminIsAuth: false
}

const adminLoginSlice = createSlice({
    name: 'admin-auth',
    initialState: initialAdminAuthState,
    reducers: {
        authenticateAdmin(state, action){
            state.adminIsAuth = !state.adminIsAuth
            console.log(state.adminIsAuth)

        },
    }
})

export const adminLoginActions = adminLoginSlice.actions;
export default adminLoginSlice.reducer;