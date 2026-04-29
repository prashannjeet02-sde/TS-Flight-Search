const { Airplane } = require("../models/index")
const CrudRepo=require("../repository/crud.repo")

class AirplaneRepository extends CrudRepo{
    constructor() {
        super(Airplane)
    }
}

module.exports=AirplaneRepository