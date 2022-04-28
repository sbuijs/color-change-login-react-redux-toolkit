
//------------------------------
//Getting information from a slice with useSelector
//------------------------------


import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    //takes in a function that specifies what state you want to access
    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)

    return (
        <div style={{ color: themeColor }}>
            <h1>Profile page</h1>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}
