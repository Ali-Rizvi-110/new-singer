const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Image is required"]
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  btnPlaceHolder: {
    type: String,
    required: [true, "Button Placeholder is required"]
  },
  pathToPage: {
    type: String,
    required: [true, "Path to Page is required"]
  }
});

const Event = mongoose.model('Event', eventSchema, 'events');

module.exports = Event;
