const { AirportController } = require("../../controller/index")
const express = require("express")

const airportRoute = express.Router()

airportRoute.post("/", AirportController.controllerCreateAirport)
airportRoute.post("/multiple", AirportController.controllerCreateMultipleAirport)
airportRoute.get("/:id", AirportController.controllerGetAirport)
airportRoute.get("/", AirportController.controllerAllAirports)
airportRoute.put("/:id", AirportController.controllerUpdateAirport)
airportRoute.delete("/:id",AirportController.controllerRemoveAirport)

module.exports=airportRoute