const express = require("express");
const routerTopup = express.Router()
const controllerTopup = require('../controllers/topup')

routertopup.route('/topup')
    .get(controllerTopup.gettopup)
    .post(controllerTopup.insert)

routertopup.route('/topup/:harga')
    .get(controllerTopup.update)
    .delete(controllerTopup.delete)
    .get(controllerTopup.getTopupbyharga)

module.exports = routerTopup