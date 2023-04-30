const express = require("express");
const postrouter = express.Router();
const fs = require('fs')
require('dotenv').config()

//TWILIO RELATED VARIABLES : 
const accountSid = process.env(TWILIO_ACCOUNT_SID)
const authToken = process.env(TWILIO_AUTHTOKEN)
const client = new twilio(accountSid, authToken);

// HOW TO ACCESS .env in node server? 

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


//TWILIO LIBRARY TUTORIAL https://www.youtube.com/watch?v=jMIPSWU1JUw https://github.com/Solomon04/Twilio-Express-Node https://www.youtube.com/watch?v=26X0rVLo6gc

//https://www.twilio.com/en-us - https://www.twilio.com/docs/api https://www.twilio.com/docs/sms https://www.twilio.com/docs/sms/send-messages

//TODO : npm install nodemon , npm install twilio (@3.17.3)

//TODO : Create an account. Move code here to correct files.

//TODO : Instead of using query, use req.body ( can test this on postman )

//body requires tagNumber ***
postrouter.post('/send-text', (req, res) => {

    //Welcome Message
    res.send('Hello to the Twilio Server')

    tagNumber = req.body.tagNumber // pull this from the request_body

    //Read in the customers data 
    let rawdata = fs.readFileSync('customers_data.json');
    let customers = JSON.parse(rawdata)

    //find the customer that has this tagNumber //if no customer has this tagNumber... return error ?
    filtered_customer = customers.filter( c=> c.tagNumber == tagNumber )[0] //ideally there would be no duplicates. 

    //_GET Variables
    const { recipient, textmessage } = req.query;

    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: process.env(TWILIO_PHONE_NUMBER) // From a valid Twilio number
    }).then((message) => console.log(message.body));

})

module.exports = postrouter;

/* NOTES : 

How to use .env file(s) : https://www.youtube.com/watch?v=hZUNMYU4Kzo

*/