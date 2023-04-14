const fs = require("fs");
const express = require("express");
const deleterouter = express.Router();

deleterouter.delete("/delete_customer/:product_id",
    async(req,res) => {
        return res.status(200).send('Deleted Customer')
    }
);

module.exports = deleterouter;