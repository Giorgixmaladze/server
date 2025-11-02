const { Gallery } = require("../model/gallery.model");

const getImages = async (req,res,next) =>{
    try{
        const images = await Gallery.find()
        res.json(images)
    }catch(err){
        res.status(500).json({ message: "Error fetching images", error: err.message })
    }
}




module.exports = {getImages}