const v1Routes = require("./v1/index")
const express = require("express")

const flightApi = express.Router()

flightApi.use("/v1",v1Routes)


module.exports=flightApi