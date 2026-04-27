const { CityService } = require("../services/index")

const City = new CityService()

const controllerCreateCity = async (req, res) => {
    try {
        const { city_name, country_id } = req.body 
        if (!city_name || !country_id) {
            return res.status(400).json({success:false,message:"All Fields are required"})
        }
        if (typeof city_name !== "string") {
            return res.status(400).json({success:false,message:"City must be string"})
        }
        if (!/^[A-Za-z\s]+$/.test(city_name)) {
            return res.status(400).json({ success: false, message: "Only Alphabets are Allowed" });
        }
        if (!Number.isInteger(Number(country_id))) {
            return res.status(400).json({success:false,message:"Only Integer Values are allowed"})
        }
        const cityData = {
            city_name: city_name.trim(),
            country_id:Number(country_id)
        }
        const response = await City.serviceCreateCity(cityData)
        return res.status(201).json({success:true,message:"City Created",data:response})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerBulkCities = async (req, res) => {
    try {
        const multiCity = await City.serviceBulkCities(req.body)
        return res.status(201).json({success:true,message:"Cities Created",data:multiCity})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetCity = async (req, res) => {
    try {
        const cityId = req.params.id 
        const result = await City.serviceGetCity(cityId)
        return res.status(200).json({success:true,message:"City Detail",data:result})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetCities = async (req, res) => {
    try {
        const allCities = await City.serviceAllCities()
        return res.status(200).json({ success: true, message: "All Cities", data:allCities})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerUpdateCity = async (req, res) => {
    try {
        const cityId = req.params.id 
        const cityData = req.body 
        const modify = await City.serviceUpdateCity(cityId,cityData)
        return res.status(200).json({success:true,message:"City Updated",data:modify})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerDeleteCity = async (req, res) => {
    try {
        const deleteId = req.params.id 
        const result = await City.serviceRemoveCity(deleteId)
        return res.status(200).json({success:true,message:"City Deleted"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to delete"})
    }
}


module.exports={controllerCreateCity,controllerBulkCities,controllerGetCity,controllerGetCities,controllerUpdateCity,controllerDeleteCity}