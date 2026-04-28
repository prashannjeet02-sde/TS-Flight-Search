const  CrudRepo  = require("./crud.repo")

const { Airport ,City,Country} = require("../models/index")

class AirportRepository extends CrudRepo{
    constructor() {
        super(Airport)
    }

    async getAirportDetails(airportId) {
        const getAirport = await Airport.findByPk(airportId, {
            include: {
                model: City,
                as: "cities",
                attributes: ["city_name"],
                include: {
                    model: Country,
                    as: "countries",
                    attributes:["country_name"]
                }
            }
        })
        return getAirport
    }

    async getAllAirportsDetails() {
        const allAirports = await Airport.findAll({
            include: {
                model: City,
                as: "cities",
                attributes: ["city_name"],
                include: {
                    model: Country,
                    as: "countries",
                    attributes:["country_name"]
                }
            }
        })
        return allAirports
    }
}

module.exports=AirportRepository