const mongoose = require("mongoose");

const salsaSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Must provide image"],
  },
  name: {
    type: String,
    required: [true, "Must provide name"],
  },
  startDate: {
    type: String,
    required: [true, "Must provide startDate"],
  },
  price: {
    type: Number,
    required: [true, "Must provide price"],
  },
  location: {
    type: String,
    required: [true, "Must provide location"],
  },
  description: {
    type: String,
    required: [true, "Must provide title"],
  },
  images: {
    type: [String],
  },
  fullDescription: {
    type: String,
  },
  transportBus: {
    type: String
  },
  transportRail: {
    type: String
  },
  transportAirport: {
    type: String
  },
  hotelDis: {
    type: String
  },
  restaurantDis: {
    type: String
  }
});

const SalsaEvent = mongoose.model("SalsaEvent", salsaSchema, "salsaEvent");

module.exports = SalsaEvent;
