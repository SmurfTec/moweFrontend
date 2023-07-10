import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventDetails: {}
}

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        introduction: (state, action) => {
            state.eventDetails.intro = action.payload
        },
        getFile1: (state, action) => {
            state.eventDetails.file1 = action.payload
        },
        getFile2: (state, action) => {
            state.eventDetails.file2 = action.payload
        },
        getTitle: (state, action) => {
            state.eventDetails.title = action.payload
        },
        getdate: (state, action) => {
            state.eventDetails.date = action.payload
        },
        gettime: (state, action) => {
            state.eventDetails.time = action.payload
        },
        getWelcomeNames: (state, action) => {
            state.eventDetails.welComeName = action.payload
        },
        getWelFontSize: (state, action) => {
            state.eventDetails.welFontSize = action.payload
        },
        getWelFontFamily: (state, action) => {
            state.eventDetails.welFontFamily = action.payload
        },
        getWelcomeColor: (state, action) => {
            state.eventDetails.welColor = action.payload
        },
        getCustomUrl: (state, action) => {
            state.eventDetails.customUrl = action.payload
        },
    }
})

export const { introduction, getFile1, getFile2, getTitle, getdate, gettime } = eventSlice.actions

export default eventSlice.reducer