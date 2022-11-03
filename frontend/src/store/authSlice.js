import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API_ROUTE } from '../config.js'

toast.configure();

export const asyncRegistration = createAsyncThunk(
    "auth/asyncRegistration",
    async(payload) => {
        const res = await fetch(`${API_ROUTE}/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        let data = await res.json();
        if (!res.ok) {
            toast.error(`${data.message}`, {
                position: "top-center",
            });
            return null
        } else {
            window.location.href = '/'
            return data.token
        }
    }
);

export const asyncLogin = createAsyncThunk(
    "auth/asyncLogin",
    async(payload) => {
        const res = await fetch(`${API_ROUTE}/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        let data = await res.json();
        if (!res.ok) {
            toast.error(`${data.message}`, {
                position: "top-center",
            });
            return null
        } else {
            window.location.href = '/'
            return { token: data.token, username: data.username }
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: '',
        loading: false,
        isAuth: false,
        username: '',
    },
    reducers: {
        resetAllState: (state, { payload }) => {
            state.token = '';
            state.isAuth = false;
            state.username = ''
        },
        setAuth: (state, { payload }) => {
            state.isAuth = true;
            state.token = payload.token;
            state.username = payload.username
        },
    },
    extraReducers: {
        [asyncRegistration.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [asyncRegistration.fulfilled]: (state, { payload }) => {

            if (!payload) {
                state.isAuth = false
            } else if (payload) {
                state.token = payload
                localStorage.setItem('token', payload)
                state.isAuth = true
            }
            state.loading = false;
        },
        [asyncLogin.pending]: (state, { payload }) => {
            state.loading = true
        },
        [asyncLogin.fulfilled]: (state, { payload }) => {
            if (!payload) {
                state.isAuth = false
            } else if (payload) {
                state.token = payload.token
                state.username = payload.username
                localStorage.setItem('username', payload.username)
                localStorage.setItem('token', payload.token)
                state.isAuth = true
            }
            state.loading = false;
        }
    },
});

export const { resetAllState, setAuth } = authSlice.actions;
export default authSlice;