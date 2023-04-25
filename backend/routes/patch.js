const express = require("express");
const patchrouter = express.Router();
const fs = require('fs')

patchrouter.patch("/update_customer/:customer_id", (req, res) => 
    {
        return res.status(200).send("Updated Customer")
    }
);

module.exports = patchrouter;