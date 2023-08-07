const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const authenticateToken = require('../controllers/authentication');

router.post("/submitForm", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.get('/getContacts', authenticateToken, async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

// ... (existing code)
router.delete("/deleteContact/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      await Contact.findByIdAndDelete(id);
      res.status(200).json({ message: "Contact deleted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  });
  // ... (existing code)
  

module.exports = router;
