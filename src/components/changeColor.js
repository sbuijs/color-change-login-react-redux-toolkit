import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme'
import { useSelector } from 'react-redux'

export const ChangeColor = ({ children }) => {

    const dispatch = useDispatch()

    const [color, setColor] = useState("");
    const themeColor = useSelector((state) => state.theme.value)

    const onChangeHandler = (e) => {
        setColor(e.target.value)
    }

    return (
        <div style={{ color: themeColor }}>
            <p>Change the color of all the text</p>
            <input
                placeholder="color like 'red' "
                type="text"
                onChange={(e) => onChangeHandler(e)} />

            <button
                onClick={() => {
                    dispatch(
                        changeColor(
                            color
                        )
                    )
                }}>
                Change color
            </button>
            {children}
        </div >
    )
}
