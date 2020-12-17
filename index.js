var port = process.env.PORT || 8081;

var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routers/router')
var cors = require('cors')

var app = express();

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => console.log("Homelo API Gateway running on " + port));
