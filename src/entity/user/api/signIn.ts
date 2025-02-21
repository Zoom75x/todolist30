import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance} from "@/shared"
import {User} from "@/types";

export interface SignInReq {
    username:string,
    password:string,
}
export const signIn = createAsyncThunk<void, SignInReq>("user/signIn", async (params,{rejectWithValue} ) => {
    try {
        const result = await apiInstance.post<User>('/users/login', params)
        return result.data
    } catch (error){
        return rejectWithValue(error)
    }
})