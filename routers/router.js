var express = require('express');

var router = express.Router()

var home = require('./home')
var sensor = require('./sensor')
var detection = require('./detection')
var auth = require('./auth')
var user = require('./user')
var house = require('./house')
var gas = require('./gas')
var temperature = require('./temperature')
var humidity = require('./humidity')
var params = require('./params')
var system = require('./system')
var alarm = require('./alarm')

router.use((req, res, next) => {
    next()
})

router.use(home)
router.use(sensor)
router.use(detection)
router.use(auth)
router.use(user)
router.use(house)
router.use(gas)
router.use(temperature)
router.use(humidity)
router.use(params)
router.use(system)
router.use(alarm)

module.exports = router