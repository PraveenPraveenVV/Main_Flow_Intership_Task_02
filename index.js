const express = require('express');
const request = require('request');

const app = express();

app.get("/",(req,res) =>{
    let city = req.query.city;
    const request = require('request');
request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb65cf2069d3a815e78db00e9783b68b`, 
    function (error, response, body) {
    if(response.statusCode == 200){
        let data = JSON.parse(body);
        res.send(`The werther your city "${city}" is "${data.weather[0].description}"`)
    }
});
})

app.listen(3001,()=> console.log("server connected"))