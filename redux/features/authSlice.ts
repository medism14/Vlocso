import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProvider: null,
    userLogin: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.userLogin = action.payload;
        },
        setUserProvider: (state, action) => {
            state.userProvider = action.payload;
        },
        setReinitialiseUserProvider: (state) => {
            state.userProvider = null;
        },
    }
});

export const { setUserLogin, setUserProvider, setReinitialiseUserProvider } = authSlice.actions; 
export default authSlice.reducer;
