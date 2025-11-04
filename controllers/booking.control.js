const Booking = require("../model/booking.model")

const createBooking = async (req,res,next) =>{
    try {
        const booking = await Booking.create(req.body)
        res.json(booking)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {createBooking}