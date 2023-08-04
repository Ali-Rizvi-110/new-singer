const paymentController = require('../controllers/paymentController')
const router = require('express').Router();

router.post('/create-order', paymentController.createOrder);
router.post('/validate-payment', paymentController.validatePayment);

module.exports = router;