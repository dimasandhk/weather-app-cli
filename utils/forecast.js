const request = require("request");

const forecast = (lati, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=${long},${lati}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("Location not found", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}C degress out, and feels like ${response.body.current.feelslike}C`
      );
    }
  });
};

module.exports = forecast;
