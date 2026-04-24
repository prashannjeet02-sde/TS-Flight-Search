const { controllerCreateCountry, controllerBulkCountry, controllerAllCountry, controllerDeleteCountry, controllerGetCountry, controllerUpdateCountry } = require("../../controller/country.controller")

const express = require("express")
const countryRoutes = express.Router()

countryRoutes.post("/",controllerCreateCountry)
countryRoutes.post("/bulk",controllerBulkCountry)
countryRoutes.get("/", controllerAllCountry)
countryRoutes.get("/:id", controllerGetCountry)
countryRoutes.put("/:id",controllerUpdateCountry)
countryRoutes.delete("/:id",controllerDeleteCountry)


module.exports=countryRoutes