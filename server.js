const express = require("express");
//node-fetch
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const apiKey = "a3716f3bb1655185feee051b1e9ea397";
const port = process.env.PORT || 3000;

app.use(cors());
app.get("/", async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
  );
  const data = await response.json();
  return res.json(data);
});

app.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const response = await fetch(apiWeatherURL);
    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/background/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const apiCountryURL = `https://api.unsplash.com/search/photos/?query=${city}&orientation=landscape&client_id=m35PZP1GOTMIowNPX6Rk70Hf5WdKJlbhZSRtk0KNndk`;
    const response = await fetch(apiCountryURL);
    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
