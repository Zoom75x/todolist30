import {createSlice} from "@reduxjs/toolkit";
import {signIn} from "@/entity/user/api/signIn.ts";

interface InitialStateType {
    isAuthorized: boolean
}
const initialState:InitialStateType = {isAuthorized:false}
export const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state) => {
            state.isAuthorized = true
        })
    }
})