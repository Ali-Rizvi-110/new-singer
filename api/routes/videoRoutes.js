const router = require('express').Router();
const authenticateToken = require("../controllers/authentication");
const videoController = require('../controllers/videoController');
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

router.post('/createVideo', authenticateToken, upload.single('thumbnail'), videoController.createVideo);
router.get('/getVideos', videoController.getVideo);
router.delete('/deleteVideo/:id', authenticateToken, videoController.deleteVideo);

router.post('/addHomePageVideo', authenticateToken, videoController.addHomePageVideos);
router.get('/getHomePageVideos', videoController.getHomePageVideos);
router.delete('/deleteHomePageVideo/:id', videoController.deleteHomePageVideo);

module.exports = router;