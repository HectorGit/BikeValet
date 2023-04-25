var express = require('express');
var app = express();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

var path = require("path");
const bodyParser = require('body-parser')
var port = 5001;

const cors = require('cors');


router = express.Router();
app.use(router);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
})) 

app.use(express.json());

app.use(cors({
  origin: '*'//['http://localhost:5000, localhost:5000']
}));

app.use("/", require("./routes/get"));
app.use("/", require("./routes/post"));
app.use("/", require("./routes/patch"));
app.use("/", require("./routes/delete"));

app.listen(port);

console.log('Bike Valet Experiment API server started on port : ' + port)