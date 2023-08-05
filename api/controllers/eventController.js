const Event = require('../models/event');
const { findByIdAndDelete } = require('../models/videos');
const fs = require('fs');
const path = require('path');
const SalsaEvent = require('../models/salsaEvent');
const BhopalEvent = require('../models/bhopalEvent');
const GrooveEvent = require('../models/grooveEvent');

const addEvent = async (req, res) => {
    try {
      let image = req.file.filename;
      let event = req.body;
      event = {...event, image: image};
      console.log("event", event);
      const insert = await Event.create(event);
      res.status(200).json({ message: "event added successfully"});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error in addEvent", error });
    }
  };

  const addSalsaEvent = async (req, res) => {
    try {
      let image;
      let event = req.body;
      let postImages = [];
      const images = req.files;
      images.forEach(element => {
        if(element.fieldname==="image")
            image = element.filename;
        else postImages.push(element.filename);
      });
      const already = await SalsaEvent.findOne({});
      if(event.name && already){
        const firstPath = path.join(__dirname, '..', 'uploads', already.image);
        await SalsaEvent.findByIdAndDelete(already._id);
        fs.unlink(firstPath, (error)=>{
          if(error)console.log(error);
          else console.log("image deleted", firstPath);
        })
        already.images.forEach((img)=>{
          const filePath = path.join(__dirname, '..', 'uploads', img);
          // console.log(filePath);
          fs.unlink(filePath, (err)=>{
            if(err)console.log(err)
            else console.log(filePath, "Deleted");
          })
        })

      }
      event = {...event, image: image, images: postImages};
      console.log("event", event);
      const insert = await SalsaEvent.create(event);
      res.status(200).json({ message: "event added successfully"});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error in addEvent", error });
    }
  };

  const addBhopalEvent = async (req, res) => {
    try {  
      let image;
      let event = req.body;
      let postImages = [];
      const images = req.files;
      images.forEach(element => {
        if(element.fieldname==="image")
            image = element.filename;
        else postImages.push(element.filename);
      });
      const already = await BhopalEvent.findOne({});
      if(event.name && already){
        const firstPath = path.join(__dirname, '..', 'uploads', already.image);
        await BhopalEvent.findByIdAndDelete(already._id);
        fs.unlink(firstPath, (error)=>{
          if(error)console.log(error);
          else console.log("image deleted", firstPath);
        })
        already.images.forEach((img)=>{
          const filePath = path.join(__dirname, '..', 'uploads', img);
          // console.log(filePath);
          fs.unlink(filePath, (err)=>{
            if(err)console.log(err)
            else console.log(filePath, "Deleted");
          })
        })

      }
      event = {...event, image: image, images: postImages};
      console.log("event", event);
      const insert = await BhopalEvent.create(event);
      res.status(200).json({ message: "event added successfully"});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error in addEvent", error });
    }
  };
  const addGrooveEvent = async (req, res) => {
    try {
      let image;
      let event = req.body;
      let postImages = [];
      const images = req.files;
      images.forEach(element => {
        if(element.fieldname==="image")
            image = element.filename;
        else postImages.push(element.filename);
      });
      const already = await GrooveEvent.findOne({});
      if(event.name && already){
        const firstPath = path.join(__dirname, '..', 'uploads', already.image);
        await GrooveEvent.findByIdAndDelete(already._id);
        fs.unlink(firstPath, (error)=>{
          if(error)console.log(error);
          else console.log("image deleted", firstPath);
        })
        already.images.forEach((img)=>{
          const filePath = path.join(__dirname, '..', 'uploads', img);
          // console.log(filePath);
          fs.unlink(filePath, (err)=>{
            if(err)console.log(err)
            else console.log(filePath, "Deleted");
          })
        })
      }
      event = {...event, image: image, images: postImages};
      console.log("event", event);
      const insert = await GrooveEvent.create(event);
      res.status(200).json({ message: "event added successfully"});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error in addEvent", error });
    }
  };

  const getAllEvents = async (req, res) => {
    try {
      const events = await Event.find({});
      console.log(events);
      res.status(200).json(events);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving events' });
    }
  };

  const getSalsaEvent = async (req, res) => {
    try {
      const event = await SalsaEvent.findOne({});
      res.status(200).json(event);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  const getBhopalEvent = async (req, res) => {
    try {
      const event = await BhopalEvent.findOne({});
      res.status(200).json(event);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  const getGrooveEvent = async (req, res) => {
    try {
      const event = await GrooveEvent.findOne({});
      res.status(200).json(event);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  
  // Controller for deleting an event
  const deleteEvent = async (req, res) => {
    const eventId = req.params.id;
    const ok = req.params.ok;
    console.log(eventId, ok);
    try {
      const event = await Event.findByIdAndDelete(eventId);
      if(ok=="1")
      {
        const firstPath = path.join(__dirname, '..', 'uploads', event.image);
        fs.unlink(firstPath, (error)=>{
          if(error)console.log(error);
          else console.log("image deleted", firstPath);
        })
        event.postImages.forEach((img)=>{
          const filePath = path.join(__dirname, '..', 'uploads', img);
          console.log(filePath);
          fs.unlink(filePath, (err)=>{
            if(err)console.log(err)
            else console.log(filePath, "Deleted");
          })
        })
      }
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error deleting event' });
    }
  };
  
  // Controller for fetching events by category
  const getEventByCat = async (req, res) => {
    const category = req.params.cat;
    try {
        if(category==="ALL"){
            const events = await Event.find({});
            return res.status(200).json(events);
        }
      const events = await Event.find({ category });
      console.log(category, events);
      res.status(200).json(events);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving events by category' });
    }
  };

  const updateEvent = async (req, res) => {
    const id = req.params.id;
    try {
        // console.log(req.body);
        const event = await Event.findByIdAndUpdate({_id: id}, { $set: req.body }, { new: true });
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error in upadateEvent", error: error});
    }
  }

  const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Event.findById(id);
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "error in getEventBYid", error: error});
    }
  }

  module.exports = {
    addEvent,
    getAllEvents,
    getEventByCat,
    deleteEvent,
    getEventById,
    updateEvent,
    addBhopalEvent,
    addGrooveEvent,
    addSalsaEvent,
    getGrooveEvent,
    getSalsaEvent,
    getBhopalEvent,
    addEvent
  }