const { MovieModel } = require("../models/movieModel")

const getMovies = async (req, res) => {
    const { query } = req
    const text = query.q || ""
    try {
        const data = await MovieModel.find(
            {
                $or: [
                    { title: { $regex: text, $options: "i" } },
                    { director: { $regex: text, $options: "i" } },
                    { year: { $regex: text, $options: "i" } },
                    { genre: { $regex: text, $options: "i" } }
                ]
            }
        ).exec();
        res.status(200).json({ message: "success", data: data })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}


const getSortedData = async (req, res) => {
    let lcOrder = 1
    const { q, order } = req.query
    if (order == "desc") {
        lcOrder = -1
    }
    try {
        let data = await MovieModel.find({
            genre: { $in: [q] },
        }).sort({ title: lcOrder });
        res.status(200).json({ message: "success", data: data })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}



const getCommonSortedData = async (req, res) => {
    let lcOrder = 1
    const { q, order } = req.query;
    if (order == "desc") {
        lcOrder = -1
    }
    try {
        let data = await MovieModel.find().sort({ [req.query.q]: lcOrder });
        res.status(200).json({ message: "success", data: data })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}




const getSpecificMovies = async (req, res) => {
    try {
        const data = await MovieModel.findOne({ _id: req.params.Id })
        res.status(200).json({ message: "success", data: data })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}


const postMovies = async (req, res) => {
    try {
        let newMovieAdded = new MovieModel(req.body);
        await newMovieAdded.save();
        res.status(200).json({ message: "success" })
    } catch (err) {
        res.status(500).json({ message: "something went wrong!", error: err.message })
    }
}

const patchMovies = async (req, res) => {
    try {
        await MovieModel.findByIdAndUpdate(req.params.Id, req.body)
        res.status(200).json({ message: "success" })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}

const deleteMovies = async (req, res) => {
    try {
        await MovieModel.findByIdAndRemove(req.params.Id)
        res.status(200).json({ message: "success" })
    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message })
    }
}



module.exports = { getMovies, getSortedData, getSpecificMovies, getCommonSortedData, postMovies, patchMovies, deleteMovies }