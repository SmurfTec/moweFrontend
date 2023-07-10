import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlices" 
import eventReducer from "./slices/eventSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        event: eventReducer,
    }
})