const router = require('express').Router();
const authenticateToken = require('../controllers/authentication');
const galleryController = require('../controllers/GallaryController');
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
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e5);
      const filename = "Gallery" + '-' + uniqueSuffix + '.' + fileExtension;
      cb(null, filename);
    },
});
  
const upload = multer({ storage: storage });

router.post('/addImage', authenticateToken, upload.single('image'), galleryController.addImage);
router.delete('/deleteImage/:id', authenticateToken, galleryController.deleteImage);
router.get('/getImages', galleryController.getImages);

router.post('/addDanceGallery', authenticateToken, upload.single('image'), galleryController.addDanceGallery);
router.post('/addMusicGallery', authenticateToken, upload.single('image'), galleryController.addMusicGallery);


router.get('/getMusicGallery', galleryController.getMusicGallery);
router.get('/getDanceGallery', galleryController.getDanceGallery);

router.delete('/deleteMusicGalleryImage/:id', authenticateToken, galleryController.deleteMusicGalleryImage);
router.delete('/deleteDanceGalleryImage/:id', authenticateToken, galleryController.deleteDanceGalleryImage);

module.exports = router;