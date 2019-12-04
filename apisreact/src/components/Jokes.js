import React from 'react'


export const Jokes = (props) => {
    return (
        <div>
            {/* <input type="submit" value="What is the JOKE?"></input> */}
            <p>{props.data}</p>
        </div>
    )
}
