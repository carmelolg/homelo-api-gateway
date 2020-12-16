var express = require('express');
var router = express.Router()
const apiAdapter = require('../adapters/apiAdapter')
const httpConfig = require('../adapters/httpConfig')

const dotenv = require('dotenv');
dotenv.config();

const api = apiAdapter(process.env.RECEIVER_URL)


router.get('/auth', (req, res) => {
    api
    .get(req.path, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
})

router.post('/auth', (req, res) => {
    api
    .post(req.path, req.body, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
})

router.put('/auth', (req, res) => {
    api
    .delete(req.path, req.body, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
})


module.exports = router