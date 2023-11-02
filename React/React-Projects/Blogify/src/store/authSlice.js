import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            // console.log("Im in AuthSlice status is: ", state.status);
            // console.log("Im in AuthSlice: ", state.userData);
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;