/*jshint esversion: 6 */
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
//to parser the post request using body-parser package
app.use(bodyParser.urlencoded({extended:true}));

//app get request
app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html")
});
//app post request
app.post("/",function(req, res){
  const query =req.body.cityName;
  const apiKey =" ";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" +apiKey+ "&units="+unit;

https.get(url, function(response){
  console.log(response.statusCode);

  response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription= weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"
      res.write("<p>The weather is currently "+ weatherDescription + "</p>");
//we can write res.write as we cannot write res.send again
      res.write("<h1>The current temperature in " + query+ " is "+temp+ " degree Celcius.</h1>");
      res.write("<img src =" + iconURL+">");
      res.send();
      // there can be only one res. send for any app.get method
    })

  })
       // res.send("Server is running");
})
app.listen(3000, function(){
console.log("Server is running on port 3000");
})
