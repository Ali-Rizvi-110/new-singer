const Video = require('../models/videos');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

const createVideo = async (req, res) => {
  try {
    console.log(req.body, req.file);
    let vid = req.body;
    vid = {...vid, thumbnail: req.file.filename};
    const video = await Video.create(vid);
    res.status(200).json({message: "video created successfully", video});
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "error in createVideo", error});
  }
}

const getVideo = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "error in getVideo", error});
  }
}

const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const dir = path.resolve(__dirname, '..', 'uploads');
    const video = await Video.findByIdAndDelete(id);
    const imgPath = path.join(dir, video.thumbnail);
    fs.unlink(imgPath, (error)=>{
        if(error){
          console.log("error in fs unlink", error);
        }else console.log("img deleted successfully");
    })
    res.status(200).json({message: "video deleted successfully", video: video});
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "error in deleteVideo", error});
  }
}

module.exports = {
  createVideo,
  getVideo,
  deleteVideo
}