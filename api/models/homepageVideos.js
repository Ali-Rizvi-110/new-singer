const mongoose = require('mongoose');

const homePageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
});

const HomePageVideos = mongoose.model('HomePageVideos', homePageSchema, 'homePageVideos');

module.exports = HomePageVideos;
