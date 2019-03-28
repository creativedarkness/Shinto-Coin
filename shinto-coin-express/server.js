// Express Framework
const express = require("express");
const app = express();

//Axios API calls
const axios = require("axios");

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
app.use(express.static(__dirname + "/react-app/build/"));

//Retrive records from MockAPI

app.get(`/conins/:id`, (reqeust, response) => {
    axios
        .get(`http://5c9d00e93be4e30014a7d318.mockapi.io/conis`)
        .then((mockAPIRecords) => {
            return response.json ({
                coins: coins
            })
        })

})


// SERVER LISTENING
app.listen(1337, () => {
    console.log("Server restarted...")
});