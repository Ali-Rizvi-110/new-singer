const Archive = require('../models/archive');

const addArchive = async (req, res) => {
    try {
        delete req.body._id;
        const event = req.body;
        console.log(event);
        const ev = await Archive.create(event);
        res.status(200).json(ev);
        console.log("created successfully");
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const deleteArchive = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Archive.findByIdAndDelete(id);
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const updateArchive = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Archive.findByIdAndUpdate({_id: id}, { $set: req.body }, { new: true });
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const getArchive = async (req, res) => {
    try {
        const id = req.params.id;
        const archive = await Archive.find({});
        // console.log(archive);
        res.status(200).json(archive);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const addImages = async (req, res) => {
    console.log(req.body, req.files);
    try {
        const id = req.params.id;
        const archive = await Archive.findById(id);
        console.log(req.files);
        req.files.forEach((img)=>{
            archive.postImages.push(img.filename);
        })
        const updatedArchive = await archive.save();
        console.log("upload successfully", updateArchive);
        res.status(200).json(updatedArchive);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    addArchive,
    deleteArchive,
    updateArchive,
    getArchive,
    addImages,
}