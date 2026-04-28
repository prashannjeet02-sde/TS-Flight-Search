const { AirportRepo } = require("../repository/index")

class AirportService{
    constructor() {
        this.airportRepo=new AirportRepo()
    }

    async serviceCreateAiport(data) {
        const airport = await this.airportRepo.createRepo(data)
        return airport
    }

    async serviceBulkAirport(data) {
        const bulkAirport = await this.airportRepo.bulkCreateRepo(data)
        return bulkAirport
    }

    async serviceGetAirport(airportId) {
        const fetch = await this.airportRepo.getAirportDetails(airportId)
        return fetch
    }

    async serviceAllAirport() {
        const allAirports = await this.airportRepo.getAllAirportsDetails()
        return allAirports
    }

    async serviceUpdateAirport(airportId, airportData) {
        const modify = await this.airportRepo.updateDataRepo(airportId, airportData)
        return modify
    }

    async serviceRemoveAirport(airportId) {
        const remove = await this.airportRepo.deleteDataRepo(airportId)
        return remove
    }
}

module.exports=AirportService