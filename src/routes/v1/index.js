const countryRoutes = require("./country.routes")
const CityRoutes = require("./city.routes")

const express = require("express")

const v1Routes = express.Router()

v1Routes.use("/country", countryRoutes)
v1Routes.use("/city",CityRoutes)

module.exports=v1Routes