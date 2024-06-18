import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessagesState {
    message: string
}

const initialState: MessagesState = {
    message: ""
}

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    }
})

//For form use
export const {setMessage} = messageSlice.actions
//for store
export default messageSlice.reducer