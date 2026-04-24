const CountryService = require("../services/country.service")

const country = new CountryService()

const controllerCreateCountry = async (req, res) => {
    try {
        const { country_name } = req.body 
        if (!country_name) {
            return res.status(400).json({success:false,message:"All Fields are required"})
        }
        const result = await country.serviceCreateCountry({ country_name })
        return res.status(201).json({success:"true",message:"Country Created",data:result})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerBulkCountry = async (req, res) => {
    try {
        const bulk = await country.serviceBulkCountry(req.body)
        return res.status(201).json({success:true,message:"All Country Created",data:bulk})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetCountry = async (req, res) => {
    try {
        const fetch = await country.serviceGetCountry(req.params.id)
        return res.status(200).json({success:true,message:"Country fetched",data:fetch})
    } catch (error) {
        console.error(error)
     return res.status(500).json({success:false,message:"Internal Server Error"})   
    }
}

const controllerAllCountry = async (req, res) => {
    try {
        const countries = await country.serviceAllCountries()
        return res.status(200).json({success:true,message:"List of countries",data:countries})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerUpdateCountry = async (req, res) => {
    try {
        const countryId = req.params.id 
        const countryData=req.body
        const modify = await country.serviceUpdateCountry(countryId, countryData)
        return res.status(200).json({success:true,message:"Country Updated",data:modify})
    } catch (error) {
         console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerDeleteCountry = async (req, res) => {
    try {
        const del = await country.serviceDeleteCountry(req.params.id)
        return res.status(200).json({success:true,message:"Country Deleted"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports={controllerCreateCountry,controllerBulkCountry,controllerGetCountry,controllerAllCountry,controllerUpdateCountry,controllerDeleteCountry}