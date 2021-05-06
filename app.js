const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

if (!address) {
  return console.log("Please provide a location");
} else {
  geocode(address, (err, { latitude: lati, longtitude: long, location }) => {
    if (err) {
      return console.log("Error:", err);
    }

    forecast(lati, long, (error, data) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log(location);
      console.log(data);
    });
  });
}
