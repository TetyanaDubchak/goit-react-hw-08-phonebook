import { createSlice } from '@reduxjs/toolkit';
import { register, } from './operations';
// logIn, logOut, refreshUser 

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            // console.log('slice', payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    }
})

export const authReducer = authSlice.reducer;