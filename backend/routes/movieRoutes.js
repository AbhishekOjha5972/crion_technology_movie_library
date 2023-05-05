const express = require("express")
const { getMovies, postMovies, patchMovies, deleteMovies, getSpecificMovies, getSortedData, getCommonSortedData } = require("../controllers/movieControllers")

const movieRouters = express.Router()

movieRouters.get("/",getMovies)
movieRouters.get("/sort",getSortedData)
movieRouters.get("/common/sort",getCommonSortedData)
movieRouters.get("/:Id",getSpecificMovies)
movieRouters.post("/",postMovies)
movieRouters.patch("/",patchMovies)
movieRouters.delete("/",deleteMovies)

module.exports = {movieRouters}