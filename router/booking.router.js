const express = require("express")
const { createBooking } = require("../controllers/booking.control")
const bookingRouter = express.Router()

bookingRouter
    .route("/")
    .post(createBooking)

module.exports = bookingRouter