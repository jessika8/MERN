import React from 'react'
import Spinner from './Spinner'


export const WeatherComponent = (props) => {
    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div>
                {/* <div className="searchInput">
                        <input type="text" placeholder="Search"></input>
                    </div> */}
                {/* <label for="location">Location: </label>
                <input type="text" name="location"></input>
                <br/>

                <label for="countryCode">Country: </label>
                <input type="text" name="countryCode"></input>
                <br/>

                <input type="submit" value="Send"></input> */}

                <p>City name:{props.city}</p>
                <p>Country: {props.country}</p>
                <p>Current temperature is:{props.temperature}</p>
                <p>Humidity is: {props.humidity}</p>
                <p>Weather description: {props.description}</p>
            </div>
        )
    }

}


