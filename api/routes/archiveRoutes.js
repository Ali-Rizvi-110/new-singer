const router = require('express').Router();
const archiveController = require('../controllers/archiveController');
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

router.post('/addArchive', authenticateToken, archiveController.addArchive);
router.put('/updateArchive', authenticateToken, archiveController.updateArchive);
router.delete('/deleteArchive/:id', authenticateToken, archiveController.deleteArchive);
router.get('/getArchive', archiveController.getArchive);
router.post('/addImages/:id', multiUpload, archiveController.addImages);

module.exports = router;