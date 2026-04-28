class CrudRepository{
    constructor(model) {
        this.model=model
    }

    async createRepo(data) {
        const createData = await this.model.create(data)
        return createData
    }

    async bulkCreateRepo(data){
        const bulkData = await this.model.bulkCreate(data)
        return bulkData
    }

    async getDataRepo(dataid) {
        const fetch = await this.model.findByPk(dataid)
        return fetch
    }

    async getAllDataRepo() {
        const allData = await this.model.findAll()
        return allData
    }

    async updateDataRepo(dataid,data) {
        const record = await this.model.findByPk(dataid)
        if (!record) {
            return null
        }
        const updateRecord = await record.update(data)
        return updateRecord
    }

    async deleteDataRepo(dataId) {
        const remove = await this.model.destroy({
            where: {
                id:dataId
            }
        })
        return remove
    }
}

module.exports=CrudRepository