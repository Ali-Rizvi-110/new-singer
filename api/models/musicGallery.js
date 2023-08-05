const mongoose = require('mongoose');

const musicGalSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "must insert image in music gallery"]
    },
    title: {
        type: String,
        required: [true, "must provide title gallery"]
    }
})

const MusicGallery = mongoose.model('MusicGallery', musicGalSchema, 'musicGallery');

module.exports = MusicGallery;