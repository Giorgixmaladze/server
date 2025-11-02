const express = require("express")
const { getImages } = require("../controllers/gallery.control")

const galleryRouter = express.Router()


galleryRouter
    .route("/")
    .get(getImages)
  


module.exports = galleryRouter