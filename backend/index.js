const express = require("express")
const cors = require("cors")
const { movieLibraryDB } = require("./config/db")
const { movieRouters } = require("./routes/movieRoutes")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/movies", movieRouters)

app.listen(process.env.port, async () => {
    try {
        await movieLibraryDB
        console.log("Your app has been connected with your DB ✅")
    } catch (err) {
        console.log(err.message)
    }
})