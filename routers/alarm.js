var express = require('express');
var router = express.Router()
const apiAdapter = require('../adapters/apiAdapter')
const httpConfig = require('../adapters/httpConfig')

const dotenv = require('dotenv');
dotenv.config();

const api = apiAdapter(process.env.ALARM_URL)

router.post('/alarm', (req, res) => {
    api
    .post(req.path, req.body, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
})

module.exports = router