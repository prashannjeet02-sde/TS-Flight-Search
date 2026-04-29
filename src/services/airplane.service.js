const { AirplaneRepo } = require("../repository/index")

class AirplaneService{
    constructor() {
        this.airplaneRepo=new AirplaneRepo()
    }

    async serviceCreateAirplane(airplaneData) {
        const airplane = await this.airplaneRepo.createRepo(airplaneData)
        return airplane
    }
    
    async serviceGetAirplane(airplaneId) {
        const fetchAirplane = await this.airplaneRepo.getDataRepo(airplaneId)
        return fetchAirplane
    }

    async serviceGetAllAirplane() {
        const allAirplane = await this.airplaneRepo.getAllDataRepo()
        return allAirplane
    }

    async serviceUpdateAirplane(airplaneId,airplaneData) {
        const modifyAirplane = await this.airplaneRepo.updateDataRepo(airplaneId, airplaneData)
        return modifyAirplane
    }

    async serviceDeleteAirplane(airplaneId) {
        const remove = await this.airplaneRepo.deleteDataRepo(airplaneId)
        return remove
    }
}

module.exports=AirplaneService