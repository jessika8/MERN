import React from 'react'


export const Quotes = (props) => {
    return (
        <div>
        <input type="submit" value="Get facts about numbers"></input>
            <p>{props.quotes}</p>
        </div>
    )
}
