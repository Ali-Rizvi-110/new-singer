const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    image: {
        type: String,
    }
})

const Gallery = mongoose.model('Gallery', gallerySchema, 'gallery');

module.exports = Gallery;