// Express Framework
const express = require("express");
const app = express();

//Axios API calls
const axios = require("axios");

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./../shinto-coin-react/build")))

//Retrive records from MockAPI
app.get(`/ledgers`, (reqeust, response) => {
    axios
        .get(`http://5c9d00e93be4e30014a7d318.mockapi.io/ledgers`)
        .then((APIresponse) => {
            // console.log("API response:", APIresponse.data);
            return (
                response.json({
                    ledgers: APIresponse.data
                })
            )

        })
})

//set call to match post call from react files
// app.post("/ledgers", ((req, res) => {
//     console.log("post request:", req);
//     //set items to add
//     let action = postReqeust.body.action;
//     let amount = postReqeust.body.amount;
//     let value = postReqeust.body.value;
//     let coinsOwned = postReqeust.body.coinsOwned;

//     axios.post("http://5c954d67498269001487f243.mockapi.io/ledgers",{
//             amount: amount, 
//             value: value,
//             action: action,
//             own: coinsOwned
//         })
//         .then((APIpostResponse) => {
//             console.log(APIpostResponse);

//         })
// }))

// SERVER LISTENING
app.listen(1337, () => {
    console.log("Server restarted...")
});