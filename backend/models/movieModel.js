const mongoose = require("mongoose")


const movieSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: String, required: true },
        genre: [{ type: String, required: true }],
        synopsis: { type: String, required: true },
        cast: [{
            name: { type: String, required: true },
            role: { type: String, required: true }
        }],
        ratings: {
            IMDb: { type: Number, required: true },
            'Rotten Tomatoes': { type: Number, required: true }
        }
    }
    ,
    {
        versionKey: false
    }
)

const MovieModel = mongoose.model("movie", movieSchema)


module.exports = { MovieModel }