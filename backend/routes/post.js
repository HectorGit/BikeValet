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

/**
 * 
 * 
 *      //read in the data
        let rawdata = fs.readFileSync('products_data.json');
        let products = JSON.parse(rawdata)['all_products'];

        //find highest index, and add 1 to it to create the new product id
        maxIdProductIndex = products.reduce((a,b)=>a.productId>b.productId.y?a:b).productId

        newProduct = {
            'productId':maxIdProductIndex+1,
            'productName':req.body.productName,
            'productOwnerName':req.body.productOwnerName,
            'Developers':req.body.Developers,
            'scrumMasterName':req.body.scrumMasterName,
            'startDate':req.body.startDate,
            'methodology':req.body.methodology
        }

        //add new entry to the products
        products.push(newProduct)

        console.log("POST /add_product - added product: ", newProduct)

        adjusted_content = {"all_products":products}

        fs.writeFileSync('products_data.json', JSON.stringify(adjusted_content, null, 2))

        return res.status(200).send(adjusted_content)
 * 
 * 
 */