const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { Room } = require("./model/rooms.model");
const roomsRouter = require("./router/rooms.router");
const servicesRouter = require("./router/services.router");
const messageRouter = require("./router/messages.router");
const galleryRouter = require("./router/gallery.router");
const bookingRouter = require("./router/booking.router");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/services", servicesRouter)

app.use("/rooms",roomsRouter)
app.use("/message",messageRouter)
app.use("/gallery",galleryRouter)
app.use("/booking",bookingRouter)
mongoose
  .connect(process.env.DATABASE_URL, { dbName: process.env.DB_NAME || 'Hotel' })
  .then(() => {
    console.log("Connected to MongoDB (db:", process.env.DB_NAME || 'Hotel', ")");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on port", process.env.PORT || 5000)
    );
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
