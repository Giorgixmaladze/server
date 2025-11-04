const express = require("express")

const bookingRouter = express.Router()

bookingRouter
    .route("/")
    .post(createBooking)

module.exports = bookingRouter