const countryRoutes = require("./country.routes")
const express = require("express")

const v1Routes = express.Router()

v1Routes.use("/country",countryRoutes)

module.exports=v1Routes