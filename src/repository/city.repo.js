const { City, Country } = require("../models/index")


class CityRepository{
    async createCity(data) {
        const city = await City.create({
            city_name: data.city_name,
            country_id:data.country_id
        })
        return city
    }

    async multiCity(data) {
        const cities = await City.bulkCreate(data)
        return cities
    }

    async getCity(id) {
        const fetchCity = await City.findByPk(id, {
            include: [
                {
                    model: Country,
                    as: "countries",
                    attributes:["country_name"]
                }
            ]
        })
        return fetchCity
    }

    async allCities() {
        const fetchCities = await City.findAll({
            include: [{
                model: Country,
                as: "countries",
                attributes:["country_name"]
            }]
        })
        return fetchCities
    }

    async updateCities(cityId, cityData) {
        const findCity = await City.findByPk(cityId)
        if (!findCity) {
            throw new Error("City Not Found")
        }
        Object.keys(cityData).forEach((key) => {
            if (cityData[key] !== undefined) {
                findCity[key]=cityData[key]
            }
        })
        await findCity.save()
        return findCity
    }

    async removeCity(cityId) {
        const remove = await City.destroy({
            where: {
                id:cityId
            }
        })
        return remove
    }
}

module.exports=CityRepository