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
    quotesData: "",
    loading: false,
    inputCity: "",
    inputCountry: "",
    inputDay: "",
    inputMonth: ""
  
  }

  callAPI = async () => {
    let response = await axios.get(`http://127.0.0.1:5000/?city=${this.state.inputCity}&countrycode=${this.state.inputCountry}`);
    console.log(response) //data is inside the object obtained from the API

    this.setState({
      weatherData: response.data.weather.list[0].main,
      city: response.data.weather.list[0].name,
      //.weather is from app.get
      countrycode: response.data.weather.list[0].sys.country,
      temp: response.data.weather.list[0].main.temp,
      humidity: response.data.weather.list[0].main.humidity,
      description: response.data.weather.list[0].weather[0].description,
      loading: false
    })
    console.log(response.data)
    console.log(response.data.weather.list[0].sys.country)
    // console.log(this.state.jokeData)
  }

  onChangeHandler = (event) => {
    this.setState({
      inputCity: event.target.value
    })
  }

  onChangeHandlerCountry = (event) => {
    this.setState({
      inputCountry: event.target.value
    })
  }


  callJokeApi = async () => {
    let response = await axios.get(`http://127.0.0.1:5000/`);
    console.log(response) //data is inside the object obtained from the API

    this.setState({

      jokeData: response.data.joke.value,

    })
    // console.log(response.data)
    // console.log(this.state.jokeData)
  }

  callQuotesApi = async () => {
    let response = await axios.get(`http://127.0.0.1:5000?day=${this.state.inputDay}&month=${this.state.inputMonth}`);
    console.log(response) //data is inside the object obtained from the API

    this.setState({

      quotesData: response.data.quotes

    })
    console.log(response.data)
    console.log(this.state.quotesData)
  }
  // reusabel, best way how  to do it. in my componet the <input name=""> has to have te name tag
  onChangeHandlerDate = (event) => {
    let name = event.target.name;
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {

    return (

      <div className="all">
        <div className="weatherComponent">
          <div className="cityLocationInput">
            <input className="" value={this.state.inputCity} onChange={this.onChangeHandler} placeholder="City"></input>
            <input className="" value={this.state.inputCountry} onChange={this.onChangeHandlerCountry} placeholder="Country"></input>
            <button className="weatherButton" type="button" onClick={this.callAPI}> Button </button>
          </div>

          <div className="weather">
            <WeatherComponent
              city={this.state.city}
              country={this.state.countrycode}
              temperature={this.state.temp}
              humidity={this.state.humidity}
              description={this.state.description}
            />
          </div>
        </div>
        <div className="jokeComponent">

        <button className="jokeButton" type="button" onClick={this.callJokeApi}> Get a Chuck Norris joke </button>
          <div className="joke">
            <Jokes data={this.state.jokeData} />
          </div>
        </div>

        <div className="quotesComponent">
            <div className="quoteInput">
              {/* name=""  IT IS VERY IMPORTANT, if i want to use onChangeHandlerDate */}
              <input name="inputDay" className="" value={this.state.inputDay} onChange={this.onChangeHandlerDate} placeholder="Day (numbers only)"></input>
              <input name="inputMonth" className="" value={this.state.inputMonth} onChange={this.onChangeHandlerDate} placeholder="Month (numbers olny)"></input>
              <button className="quotesButton" type="button" onClick={this.callQuotesApi}>Facts about dates </button>
            </div>
            <div className="quotes">
              <Quotes data={this.state.quotesData} />
            </div>
          </div>

        </div>
        )
      }
    
      // trying Monicas version
  // async componentDidMount() {
          //   this.setState({
          //     loading: true
          //   })
          //   const response = await axios.get(`http://127.0.0.1:5000`);
          //   console.log(response) //data is inside the object obtained from the API

          //   this.setState({
          //     // weatherData: response.data.weather.list[0].main,
          //     city: response.data.weather.list[0].name,
          //     temp: response.data.weather.list[0].main.temp,
          //     humidity:response.data.weather.list[0].main.humidity,
          //     description:response.data.weather.list[0].weather[0].description,
          //     jokeData: response.data.joke.value,
          //     quotesData: response.data.quotes,
          //     loading: false
          //   })
          //   console.log(this.state.jokeData)
          // }
          // render() {
          //   //variables here (inside the render before the return)
          //   //we can loop inside an array with the method map()
          //   //map takes a fn inside
          //   // const manchesterWeather = this.state.weatherData.temp
          //   const chuckJoke = this.state.jokeData;
          //   return (
          //     <div className="all">
          //       <div className="weather">
          //       <WeatherComponent
          //         city={this.state.city}
          //         temperature={this.state.temp}
          //         humidity={this.state.humidity}
          //         description={this.state.description}
          //         loading={this.state.loading} />
          //       </div>
          //       <div className="joke">
          //       <Jokes data={this.state.jokeData} />
          //       </div>
          //       <Quotes quotes={this.state.quotesData}/>
          //     </div>
          //   )
          // }
        }



// 1) install axios
// 2) Check if axios is installed in package.json in dependencies 
// 3) 
