import { createSlice } from "@reduxjs/toolkit";


const initialUI = {
    notification: null
}


const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUI,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});


export default uiSlice.reducer;
export const uiActions = uiSlice.actions;