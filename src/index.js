const dotenv = require("dotenv")
dotenv.config()
const { Sequelize } = require("sequelize")
const PORT=process.env.PORT || 8000
const app = require("./app")

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:"mysql"
    }
)

sequelize.authenticate().then(() => {
    console.log("Database is connected")
}).catch((err) => {
    console.log("Database connection failed")
})

app.listen(PORT, () => {
    console.log(`Server is listening to PORT:${PORT}`)
})