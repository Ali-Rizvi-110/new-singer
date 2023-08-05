const mongoose = require("mongoose");

const bhopalSchema = new mongoose.Schema({
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

const BhopalEvent = mongoose.model("BhopalEvent", bhopalSchema, "bhopalEvent");

module.exports = BhopalEvent;
