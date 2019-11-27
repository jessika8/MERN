import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import { Jokes } from './components/Jokes'
import { Quotes } from './components/Quotes'
import { WeatherComponent } from './components/WeatherComponent' //the curly braces means I did 
//not use the export default in the Users components but 
// the export is at the beginning of the function export const Users = (props) => {


export default class App extends Component {
  state = {
    weatherData: [], //state is assigned below in setState
    jokeData: [],
    quotesData: [],
    loading: false
  }

  
  async componentDidMount() {
    this.setState({
      loading: true
    })
    const response = await axios.get(`http://127.0.0.1:5000`);
    console.log(response) //data is inside the object obtained from the API
    
    this.setState({
      // weatherData: response.data.weather.list[0].main,
      city: response.data.weather.list[0].name,
      temp: response.data.weather.list[0].main.temp,
      humidity:response.data.weather.list[0].main.humidity,
      description:response.data.weather.list[0].weather[0].description,
      jokeData: response.data.joke.value,
      quotesData: response.data.quotes,
      loading: false
    })
    console.log(this.state.jokeData)
  }
  render() {
    //variables here (inside the render before the return)
    //we can loop inside an array with the method map()
    //map takes a fn inside
    // const manchesterWeather = this.state.weatherData.temp
    const chuckJoke = this.state.jokeData;
    return (
      <div className="all">
        <div className="weather">
        <WeatherComponent
          city={this.state.city}
          temperature={this.state.temp}
          humidity={this.state.humidity}
          description={this.state.description}
          loading={this.state.loading} />
        </div>
        <div className="joke">
        <Jokes data={this.state.jokeData} />
        </div>
        <Quotes quotes={this.state.quotesData}/>
      </div>
    )
  }
}



// 1) install axios
// 2) Check if axios is installed in package.json in dependencies 
// 3) 
