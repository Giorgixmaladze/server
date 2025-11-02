const express = require("express")
const { getAllRooms } = require("../controllers/rooms.control")

const roomsRouter = express.Router()


roomsRouter
    .route("/")
    .get(getAllRooms)


module.exports = roomsRouter