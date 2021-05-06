const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

if (!address) {
  return console.log("Please provide a location");
} else {
  geocode(address, (err, res) => {
    if (err) {
      return console.log("Error:", err);
    }

    forecast(res.latitude, res.longtitude, (error, data) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log(res.location);
      console.log(data);
    });
  });
}
