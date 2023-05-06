const express = require("express")
const { getMovies, postMovies, patchMovies, deleteMovies, getSpecificMovies, getSortedData, getCommonSortedData } = require("../controllers/movieControllers")

const movieRouters = express.Router()

movieRouters.get("/",getMovies)
movieRouters.get("/sort",getSortedData)
movieRouters.get("/common/sort",getCommonSortedData)
movieRouters.get("/specific/:Id",getSpecificMovies)
movieRouters.post("/",postMovies)
movieRouters.patch("/:Id",patchMovies)
movieRouters.delete("/:Id",deleteMovies)

module.exports = {movieRouters}