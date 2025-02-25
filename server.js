
// PROMISIFY - USING A MODULE = USING THE PROMISIFY METHOD INSIDE THE UTIL MODULE
//some company don't use external modules but only local so this is not the way. See the next one manually below

const request = require('request');
const express = require('express')
const cors = require('cors')
require('dotenv').config()

//get just the promisify method from the built in util library
//if not use {promisify}, we get the whole util library, when we only need the promisify method from it
const { promisify } = require('util');

const app = express();
app.use(cors())

const promisifiedRequest = promisify(request); //promisify the request method

const getWeather = async (city, countryCode) => { //make our function asynchronous
    console.log(city)
    //wait for the request to complete before moving onto the next line of the code
    let data = await promisifiedRequest({
        //${process.env.APPID} stores the key in a env var (secure)
        uri: `https://api.openweathermap.org/data/2.5/find?q=${city},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        json: true

    });
    return data.body

}

const getJoke = async () => {

    let options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        json: true,
        headers: {
            'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.APPIDD}`,
            accept: 'application/json'
        }
    };

    let data = await promisifiedRequest(options)

    return data.body
}

const getQuotes = async (day, month) => {

    let options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${month}/${day}/date`,
        // if i want to see the data, need to be false
        json: true,
        headers: {
            'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.APPIDD}`
          }
    }
    let data = await promisifiedRequest(options)
    console.log(data.body)
    return data.body
    
}


app.get('/', async (req, res) => { // Name of the page that you want to create a route for. This'/' is the default page
    
    let city = req.query.city
    let countryCode = req.query.countrycode
    let day = req.query.day
    let month = req.query.month
    // console.log(city)
    let responseData = {
        'weather': await getWeather(city, countryCode),
        'joke': await getJoke(),
        'quotes': await getQuotes(day, month)
    }
    // let responseDataCountry = await getWeather(countryCode)
    res.send(responseData)
    // res.send(responseDataCountry)
    // console.log(await getWeather())
});

app.listen(5000)




// const getJoke = async () => {

//     let options = {
//         method: 'GET',
//         url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
//         json: true,
//         headers: {
//             'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
//             'x-rapidapi-key': `${process.env.APPIDD}`,
//             accept: 'application/json'
//         }
//     };

//     let data = await promisifiedRequest(options)

//     return data.body
// }

// const getQuotes = async () => {

//     let options = {
//         method: 'GET',
//         url: 'https://numbersapi.p.rapidapi.com/6/21/date',
//         // if i want to see the data, need to be false
//         json: true,
//         headers: {
//             'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
//             'x-rapidapi-key': 'c999685f57mshf03c0e71840ee6ep18f839jsnea48b9bb58fe'
//           }
//     }
//     let data = await promisifiedRequest(options)
//     console.log(data.body)
//     return data.body
    
// }
// getQuotes()



// app.get('/', async (req, res) => { // Name of the page that you want to create a route for. This'/' is the default page
//     let city = req.query.city
//     let responseData = {
//         'weather': await getWeather(city),
//         'joke': await getJoke(),
//         'quotes' : await getQuotes()

//     }
//     res.send(responseData)
//     console.log(await getWeather())
// });







