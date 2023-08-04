const mongoose = require("mongoose");

const archiveSchema = new mongoose.Schema({
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
  endDate: {
    type: String,
    required: [true, "Must provide endDate"],
  },
  price: {
    type: Number,
    required: [true, "Must provide price"],
  },
  location: {
    type: String,
    required: [true, "Must provide location"],
  },
  venue: {
    type: String,
    required: [true, "Must provide Image"],
  },
  status: {
    type: String,
    required: [true, "Must provide status"],
  },
  category: {
    type: String,
    required: [true, "Must provide category"],
  },
  organizer: {
    type: String,
    required: [true, "Must provide organizer"],
  },
  phone: {
    type: String,
    required: [true, "Must provide String"],
  },
  email: {
    type: String,
    required: [true, "Must provide email"],
  },
  remainingTickets: {
    type: String,
    required: [true, "Must provide remainingTickets"],
  },
  address: {
    type: String,
    required: [true, "Must provide address"],
  },
  description: {
    type: String,
    required: [true, "Must provide title"],
  },
  postImages: {
    type: [],
  },
  fullDescription: {
    type: String,
  }
});

const Archive = mongoose.model("Archive", archiveSchema, "archive");

module.exports = Archive;
