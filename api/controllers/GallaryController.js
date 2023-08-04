const Gallery = require('../models/gallary');
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

module.exports = {
    addImage,
    deleteImage,
    getImages,
}