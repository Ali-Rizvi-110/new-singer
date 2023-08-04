const mongoose = require("mongoose");

const videoImage = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: [true, "must provide the image"],
  },
  video: {
    type: String,
    required: [true, "must provide the main video"],
  },
});

const Video = mongoose.model("Video", videoImage, "videos");

module.exports = Video;
