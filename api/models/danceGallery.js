const mongoose = require('mongoose');

const danceGallerySch = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "must insert image in dance gallery"]
    },
    title: {
        type: String,
        required: [true, "must provide title gallery"]
    }
})

const danceGallery = mongoose.model('danceGallery', danceGallerySch, 'danceGallery');

module.exports = danceGallery;