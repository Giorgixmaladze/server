const mongoose = require("mongoose")


const gallerySchema = new mongoose.Schema({
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    }
})


const Gallery = mongoose.model("Gallery",gallerySchema)

module.exports = {Gallery}