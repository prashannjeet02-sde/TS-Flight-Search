const { CityController } = require("../../controller/index")

const express = require("express")
const cityRoute = express.Router()

cityRoute.post("/", CityController.controllerCreateCity)
cityRoute.post("/multiple", CityController.controllerBulkCities)
cityRoute.get("/:id", CityController.controllerGetCity)
cityRoute.get("/", CityController.controllerGetCities)
cityRoute.put("/:id", CityController.controllerUpdateCity)
cityRoute.delete("/:id",CityController.controllerDeleteCity)

module.exports=cityRoute