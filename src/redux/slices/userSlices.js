import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "Configs/secrets";
import axios from "axios"

const initialState = {
    user: {}
}

export const getUserProfile = async() => {
    const token = JSON.parse(localStorage.getItem('USER_CREDENTIALS'))
    try {
        const response = await axios.get(`${API_BASE}user/user-profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const{data} = response
        console.log("dtata ", data)
        if(data.status===200){
            localStorage.setItem("user", JSON.stringify(data?.data))
        }
    } catch (error) {
        return error
    }
}

export const deleteUserProfile = async() => {
    const token = JSON.parse(localStorage.getItem('USER_CREDENTIALS'))
    console.log("object1 ", token)
    try {
        const response = await axios.delete(`${API_BASE}user/delete-account`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: {}
        })
        return response
    } catch (error) {
        console.log("object3")
        return error
    }
}

export const userChangePassword = async(body) => {
    const token = JSON.parse(localStorage.getItem('USER_CREDENTIALS'))
    try {
        const response = await axios.put(`${API_BASE}user/change-password`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        console.log(response)
        return response
    } catch (error) {
        return error
    }
}

export const fetchUser = createAsyncThunk(("users/fetchUsers", async() => {
    const token = JSON.parse(localStorage.getItem('USER_CREDENTIALS'))
    console.log("token ", token)
    try {
        const response = await axios.get(`${API_BASE}user/user-profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        return error
    }
}))

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const getUser = state => state.users

export default userSlice.reducer