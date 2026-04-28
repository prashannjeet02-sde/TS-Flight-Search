const countryRoutes = require("./country.routes")
const CityRoutes = require("./city.routes")
const AirportRoute = require("./airport.routes")

const express = require("express")

const v1Routes = express.Router()

v1Routes.use("/country", countryRoutes)
v1Routes.use("/city",CityRoutes)
v1Routes.use("/airport", AirportRoute)

module.exports=v1Routes