import React from 'react'
import Spinner from './Spinner'


export const WeatherComponent = (props) => {
    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <p>City name:{props.city}</p>
                <p>Country: {props.country}</p>
                <p>Current temperature is:{props.temperature}</p>
                <p>Humidity is: {props.humidity}</p>
                <p>Weather description: {props.description}</p>
            </div>
        )
    }

}


