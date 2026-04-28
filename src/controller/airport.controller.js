const { AirportService } = require("../services/index")
const Airport = new AirportService()


const controllerCreateAirport = async (req, res) => {
    try {
        const createAirport = await Airport.serviceCreateAiport(req.body)
        return res.status(201).json({success:true,message:"Airport Created",data:createAirport})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerCreateMultipleAirport = async (req, res) => {
    try {
        const createAirports = await Airport.serviceBulkAirport(req.body)
        return res.status(201).json({success:true,message:"Airports Created",data:createAirports})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetAirport = async (req, res) => {
    try {
        const fetchAirport = await Airport.serviceGetAirport(req.params.id)
        console.log("Get airport",fetchAirport)
    return res.status(200).json({success:true,message:"Airport",data:fetchAirport})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server error"})
    }
}

const controllerAllAirports = async (req, res) => {
    try {
        const allAirports = await Airport.serviceAllAirport()
        return res.status(200).json({success:true,message:"All Available Airports",data:allAirports})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to fetch"})
    }
}

const controllerUpdateAirport = async (req, res) => {
    try {
        const airportId = req.params.id 
        const airportData = {
            airport_name:req.body.airport_name
        }
        if (!airportId) {
            return res.status(400).json({success:false,message:"No Airport found"})
        }
        const modify = await Airport.serviceUpdateAirport(airportId, airportData)
        return res.status(200).json({success:true,message:"Airport Updated",data:modify})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerRemoveAirport = async (req, res) => {
    try {
        const airportId = req.params.id 
        const del = await Airport.serviceRemoveAirport(airportId)
        return res.status(200).json({ success:true,message:"Airport Deleted"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to delete"})
    }
}

module.exports={controllerCreateAirport,controllerCreateMultipleAirport,controllerGetAirport,controllerAllAirports,controllerUpdateAirport,controllerRemoveAirport}