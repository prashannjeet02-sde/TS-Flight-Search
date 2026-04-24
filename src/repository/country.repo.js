const { Country } = require("../models/index")


class CountryRepository{
    async createCountry(data) {
        const country = await Country.create({
            country_name:data.country_name
        })
        return country
    }

    async bulkCountry(data) {
        const bulk = await Country.bulkCreate(data)
        return bulk
    }

    async getCountry(countryId) {
        const fetchCountry = await Country.findByPk(countryId)
        return fetchCountry
    }

    async allCountries() {
        const fetchCountries = await Country.findAll()
        return fetchCountries
    }

    async updateCountry(id, data) {
        const findCountry = await Country.findByPk(id)
        if (!findCountry) {
            throw new Error("Country Not Found")
        }
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                findCountry[key]=data[key]
            }
        })
       await findCountry.save()
        return findCountry
    }

    async deleteCountry(id) {
        const remove = await Country.destroy({
            where: {
                id:id
            }
        })
    }
}

module.exports=CountryRepository