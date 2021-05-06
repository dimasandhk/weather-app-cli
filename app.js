const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}C degress out.`
//     );
//   }
// });

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

geocode("Pekanbaru", (err, res) => {
  console.log("Err:", err);
  console.log("Res:", res);
});
