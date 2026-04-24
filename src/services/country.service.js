const countryRepo = require("../repository/country.repo")

class CountryService{
    constructor() {
        this.repoCountry=new countryRepo()
    }

    async serviceCreateCountry(data) {
        const country = await this.repoCountry.createCountry(data)
        return country
    }

    async serviceBulkCountry(data) {
        const multiCountry = await this.repoCountry.bulkCountry(data)
        return multiCountry
    }

    async serviceGetCountry(countryId) {
        const countryByid = await this.repoCountry.getCountry(countryId)
        return countryByid
    }

    async serviceAllCountries() {
        const fetch = await this.repoCountry.allCountries()
        return fetch
    }

    async serviceUpdateCountry(countryid,countryData) {
        const modify = await this.repoCountry.updateCountry(countryid, countryData)
        return modify
    }

    async serviceDeleteCountry(countryId) {
        const remove = await this.repoCountry.deleteCountry(countryId)
        return remove
    }
}

module.exports=CountryService