
//------------------------------
//creating a slice and adding reducers and actions
//------------------------------


//create slice makes it possible to create a reducer in an easy way.
import { createSlice } from '@reduxjs/toolkit'


//save the initial state value in a variable so that we can re-use it
const initialStateValue = {
    name: "",
    age: 0,
    email: ""
}

export const userSlice = createSlice({
    // all the information about the reducer
    //the actions we want to do on the state 
    //and the name of the state

    //name of the state
    name: "user",
    //initial state
    initialState: {
        //reffer to the variable
        value: initialStateValue
    },
    reducers: {
        //functions
        //every action that you want to take, it takes in a function 
        //in this function it takes in two arguments. 
        //first the value of the state, and the second the action
        //state holds information about current and previous value of our state
        //action is an object containing two things: payload and type
        //payload: information that you want to pass in for changing the state
        //type: trigger different types of actions 
        login: (state, action) => {
            //when we want to login
            //we want to grab the previous state we had
            //and change it to what we get from the payload
            //in this case it recieves an object containing name,age and email 
            state.value = action.payload
        },
        //we don't use the action here, so we can remove it and only use the state
        logout: (state) => {
            //set it back to the initialStateValue (variable)
            state.value = initialStateValue
        }
    }
})

//export the actions you want to create
export const { login, logout } = userSlice.actions

//export the reducer itself
export default userSlice.reducer