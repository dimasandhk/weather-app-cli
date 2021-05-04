const req = require("request");

const url = "http://api.weatherstack.com/";
const endpoint = `${url}/current?access_key=49113a4a16e82ca70a251870b240d777&query=37.8267,-122.4233&units=m`;

req({ url: endpoint, json: true }, (err, res) => {
  const data = res.body.current;
  console.log(`Weather = ${data.weather_descriptions[0]}
  \nTemperature = ${data.temperature}C
  \nFeels Like = ${data.feelslike}C`);
});
