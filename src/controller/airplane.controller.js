const { AirplaneService } = require("../services/index")

const Airplane = new AirplaneService()

const controllerCreateAirplane = async (req, res) => {
    try {
        const { airplane_model, seating_capacity } = req.body
        if (!airplane_model || !seating_capacity) {
            return res.status(201).json({success:false,message:"All fields are required"})
        }
        const airplaneData = {
            airplane_model:req.body.airplane_model,
            seating_capacity:req.body.seating_capacity
        }
        const response = await Airplane.serviceCreateAirplane(airplaneData)
        return res.status(201).json({success:true,message:"Airplane Created",data:response})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetAirplane = async (req, res) => {
    try {
        const airportId = req.params.id 
        if (!airportId) {
            return res.status(400).json({success:false,message:"No such airplane found"})
        }
        const fetchAirplane = await Airplane.serviceGetAirplane(airportId)
        return res.status(200).json({success:true,message:"Airplane Details",data:fetchAirplane})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to fetch"})
    }
}

const controllerGetAllAirplanes = async (req, res) => {
    try {
        const allAirplanes = await Airplane.serviceGetAllAirplane()
        return res.status(200).json({success:true,message:"All Airplane",data:allAirplanes})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerUpdateAirplanes = async (req, res) => {
    try {
        const airplaneId = req.params.id 
        const airplaneData = req.body 
        const modifyAirplane = await Airplane.serviceUpdateAirplane(airplaneId, airplaneData)
        return res.status(200).json({success:true,message:"Airplane Updated",data:modifyAirplane})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerDeleteAirplanes = async (req, res) => {
    try {
        const airplaneId = req.params.id 
        const removeAirplane = await Airplane.serviceDeleteAirplane(airplaneId)
        return res.status(200).json({success:true,message:"Airplane Deleted"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to delete"})
    }
}

module.exports={controllerCreateAirplane,controllerGetAirplane,controllerGetAllAirplanes,controllerUpdateAirplanes,controllerDeleteAirplanes}