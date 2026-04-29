const { AirplaneController } = require("../../controller/index")

const express = require("express")
const airplaneRoutes = express.Router()

airplaneRoutes.post("/", AirplaneController.controllerCreateAirplane)
airplaneRoutes.get("/:id", AirplaneController.controllerGetAirplane)
airplaneRoutes.get("/", AirplaneController.controllerGetAllAirplanes)
airplaneRoutes.put("/:id", AirplaneController.controllerUpdateAirplanes)
airplaneRoutes.delete("/:id",AirplaneController.controllerDeleteAirplanes)

module.exports=airplaneRoutes