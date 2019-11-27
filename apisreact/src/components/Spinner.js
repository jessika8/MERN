import React from 'react'
import spinnerImage from '../spinner.gif'

export const Spinner = () => {
    return (
        <div>
            <img src={spinnerImage} alt="loading..." />
        </div>
    )
}

export default Spinner

// rafc creates an arrow function