const express = require("express");
const postrouter = express.Router();
const fs = require('fs')

postrouter.post("/add_customer",
    async(req,res) => {

        console.log("add_customer, data : ", req.body)

        let rawdata = fs.readFileSync('customers_data.json');
        let customers = JSON.parse(rawdata)

        newCustomer = {
            'customerName': req.body.customerName,
            'customerPhone':req.body.customerPhone,
            'tagNumber': req.body.tagNumber,
        }

        customers.push(newCustomer)

        fs.writeFileSync('customers_data.json', JSON.stringify(customers, null, 2))

        console.log("added customer !")

        return res.status(200).send(customers)
    }
);

module.exports = postrouter;