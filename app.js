const req = require("request");

const url = "http://api.weatherstack.com/";
const endpoint = `${url}/current?access_key=49113a4a16e82ca70a251870b240d777&query=37.8267,-122.4233&units=m`;

req({ url: endpoint, json: true }, (err, res) => {
  if (!err) {
    const data = res.body.current;
    console.log(`Weather = ${data.weather_descriptions[0]}
    \nTemperature = ${data.temperature}C
    \nFeels Like = ${data.feelslike}C`);
  } else
    res.body.error
      ? console.log("Unable to find location")
      : console.log("Unable to connect to weather service!");
});

// const geocoding =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGltYXMtYW5kaGsiLCJhIjoiY2tucjZzYTJwMDZvNzMyb3J4M3dud3RjNCJ9.y4qwU8nSYCY_kIQhjA1PCw&limit=1";
// req({ url: geocoding, json: true }, (err, res) => {
//   const locationResult = res.body.features[0];
//   const latitude = locationResult.center[1];
//   const longtitude = locationResult.center[0];
//   console.log(latitude, longtitude);
// });
