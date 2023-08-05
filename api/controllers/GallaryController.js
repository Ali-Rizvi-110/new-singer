const MusicGallery = require('../models/musicGallery');
const DanceGallery = require('../models/danceGallery');
const fs = require('fs');
const path = require('path');

const addImage = async (req, res) => {
    try {
        const image = {
            image: req.file.filename
        }
        const img = await Gallery.create(image);
        res.status(200).json(img);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const addMusicGallery = async (req, res) => {
    try {
        let content = req.body;
        console.log("req.booyd", req.body);
        content = {...content, image: req.file.filename}; 
        console.log(content);
        const img = await MusicGallery.create(content);
        res.status(200).json(img);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const addDanceGallery = async (req, res) => {
    try {
        let content = req.body;
        content = {...content, image: req.file.filename}; 
        const img = await DanceGallery.create(content);
        res.status(200).json(img);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const deleteImage = async (req, res) => {
    try {
        const img = await Gallery.findByIdAndDelete(req.params.id);
        const imgPath = path.join(__dirname, '..', 'uploads', img.image);
        fs.unlink(imgPath, (err)=>{
            if(err)console.log(err);
        })
        res.status(200).json(img);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const getImages = async (req, res) => {
    try {
        const images = await Gallery.find({});
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const getMusicGallery = async (req, res) => {
    try {
        const images = await MusicGallery.find({});
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const getDanceGallery = async (req, res) => {
    try {
        const images = await DanceGallery.find({});
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    addImage,
    deleteImage,
    getImages,
    addDanceGallery,
    addMusicGallery,
    getDanceGallery,
    getMusicGallery
}