import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    color: "black"
}

export const userSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    }
})

//export the actions you want to create
export const { changeColor } = userSlice.actions

//export the reducer itself
export default userSlice.reducer