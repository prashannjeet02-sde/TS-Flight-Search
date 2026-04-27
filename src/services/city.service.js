const { CityRepo } = require("../repository/index")

class CityService{
    constructor() {
        this.cityRepository=new CityRepo()
    }

    async serviceCreateCity(data) {
        const city = await this.cityRepository.createCity(data)
        return city
    }

    async serviceBulkCities(data) {
        const cities = await this.cityRepository.multiCity(data)
        return cities
    }

    async serviceGetCity(cityid) {
        const fetch = await this.cityRepository.getCity(cityid)
        return fetch
    }

    async serviceAllCities() {
        const cities = await this.cityRepository.allCities()
        return cities
    }

    async serviceUpdateCity(cityid, cityData) {
        const modifyCity = await this.cityRepository.updateCities(cityid,cityData)
        return modifyCity
    }

    async serviceRemoveCity(cityId) {
        const del = await this.cityRepository.removeCity(cityId)
        return del
    }
}

module.exports=CityService