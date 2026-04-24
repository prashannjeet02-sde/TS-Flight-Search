const express = require("express")
const app = express()
const flightApi = require("./routes/index")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

// Test Route 
app.use("/test", (req, res) => {
    res.json({message:"API testing"})
})

// Routes 
app.use("/api",flightApi)

module.exports=app