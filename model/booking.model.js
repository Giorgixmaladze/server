const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    email:String,
    roomType:String,
    arrivalDate:Date,
    departureDate:Date,
    adults:Number,
    children:Number
})

const Booking = mongoose.model("Booking",bookingSchema)

module.exports = Booking