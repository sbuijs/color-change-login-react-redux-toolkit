
//------------------------------
// Using actions with useDispatch
//------------------------------

//useDispatch is used to modify values of states
import { useDispatch } from 'react-redux'

//specify the actions we want to use from the slice
import { login, logout } from '../features/user'

export const Login = () => {
    //let react know that we want to use the dispatch
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                //this defines what action you would like to take on click
                dispatch(
                    //pass in the login function
                    login(
                        //adding this object into the payload
                        {
                            name: "Stephanie",
                            age: 33,
                            email: "stephanie@gmail.com"
                        }
                    )
                )
            }}>
                Login
            </button>
            <button onClick={() => {
                dispatch(
                    //logout uses the initial value so we don't have to set the payload
                    logout({})
                )
            }}>
                Logout
            </button>
        </div>
    )
}
