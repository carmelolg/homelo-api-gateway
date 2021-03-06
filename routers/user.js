var express = require('express');
var router = express.Router()
const apiAdapter = require('../adapters/apiAdapter')
const httpConfig = require('../adapters/httpConfig')

const dotenv = require('dotenv');
dotenv.config();

const api = apiAdapter(process.env.RECEIVER_URL)


router.get('/user', (req, res) => {
    api
    .get(req.path, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.status(err.response.status).send(err.response.statusText))
})

router.post('/user', (req, res) => {
    api
    .post(req.path, req.body, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.status(err.response.status).send(err.response.statusText))
})

router.delete('/user', (req, res) => {
    api
    .delete(req.path, httpConfig(req))
    .then(resp => res.send(resp.data))
    .catch(err => res.status(err.response.status).send(err.response.statusText))
})


module.exports = router