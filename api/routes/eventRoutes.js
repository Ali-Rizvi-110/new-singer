const router = require("express").Router();
const eventController = require("../controllers/eventController");
const authenticateToken = require("../controllers/authentication");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the destination folder for uploaded files
      console.log(file);
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Extract the file extension
      const fileExtension = file.originalname.split('.').pop();
      // Generate a unique filename with the extension
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = file.fieldname + '-' + uniqueSuffix + '.' + fileExtension;
      cb(null, filename);
    },
  });
  
const upload = multer({ storage: storage });

const multiUpload = (req, res, next) => {
    upload.any()(req, res, function (err) {
      if (err) {
        // Handle error from upload.any()
        console.log("here err", err);
        return next(err);
      }
      next();
    });
  };
  

router.post("/addEvent", authenticateToken, upload.single('image'), eventController.addEvent);
router.get("/getDashboardEvents", eventController.getDashboardEvents);
router.delete('/deleteDashboardEvent/:id', authenticateToken, eventController.deleteDashboardEvent);


router.get("/showEvents", eventController.getAllEvents);
// router.delete("/deleteEvent/:id/:ok", authenticateToken, eventController.deleteEvent);
router.get("/getEventsByCat/:cat", eventController.getEventByCat);
router.get("/getEventById/:id", eventController.getEventById);
router.put("/updateEvent/:id", authenticateToken, eventController.updateEvent);

router.post('/addSalsaEvent', authenticateToken, multiUpload, eventController.addSalsaEvent);
router.post('/addBhopalEvent', authenticateToken, multiUpload, eventController.addBhopalEvent);
router.post('/addGrooveEvent', authenticateToken, multiUpload, eventController.addGrooveEvent);

router.get('/getSalsaEvent', eventController.getSalsaEvent);
router.get('/getBhopalEvent', eventController.getBhopalEvent);
router.get('/getGrooveEvent', eventController.getGrooveEvent);


module.exports=router;