
const express = require("express");
const getrouter = express.Router();
const fs = require('fs');

getrouter.get("/", (req, res) => {
    return res.status(200).send("Welcome to BIKE VALET API! 🌝");
});

getrouter.get("/customers", 
    async (req, res) => {
        let rawdata = fs.readFileSync('customers_data.json');
        let customers = JSON.parse(rawdata);//not sure if this'll parse as an array
        console.log('GET /customers');

        console.log(customers)

        return res.status(200).send(customers);
    }
);

module.exports = getrouter;