# MERN

Project about combining together front-end and back-end using MongoDB, Express.js, React and Node.js. Displaing information from three different APIs

## Motivation
I have done few projects with front-end and back-end. Now I want to connect them together. MongoDB - login area, which will save your details and takes the user to her profile. Express.js and Node.js for the back-end, to get the information from the API. React for the front-end to display all the information

## What have i achieved so far?
* OpenWeatherMap API is displaying current weather when inserting city and country
* Chuck Norris API is displaying a joke


## How can I make the project better?
* Adding a login area using MongoDB for saving the data
* Adding a third API
* Improving the design
* Adding more APIs

## Tech/framework used
* Node.js v10.16.3
* React v16.11.0
* Express.js


## Installation
In the MERN-master install:
* Use the package manager [npm](https://www.npmjs.com/package/express) to install express
* Use the package manager [npm](https://www.npmjs.com/package/request) to install request
* Use the package manager [npm](https://www.npmjs.com/package/cors) to install cors
* Use the package manager [npm](https://www.npmjs.com/package/dotenv) to install dotenv

In the apisreact install:
* Use the package manager [npm](https://www.npmjs.com/package/axios) to install axios


```bash
npm i express
npm i request
npm i cors
npm i dotenv
npm i axios
```

## How to use?
1. Install needed modules
2. In the MERN-master folder create a file called .env
3. Create a user at the [OpenWeatherMap](https://openweathermap.org/) for a free API
4. Copy your API key
5. Create a variable called APPID in the .env file and paste your key there
6. Create a user at the [RapidAPI](https://rapidapi.com/) for a free API
7. Copy your API key
8. Create a variable called APPIDD in the .env file and paste your key there
9. In the MERN-master folder run node server.js
10. Open your browser at http://localhost:5000/
11. In the apisreact folder run npm start
12. It will open the http://localhost:3000/

## Contribute
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits
Thank you to people who contrbuted in this project:
* @vhhotch
* @monica-vo
