const crypto = require("crypto");
const Razorpay = require("razorpay");

const KEY_ID = "rzp_test_wvLy5hzErrd9Fm";
const KEY_SECRET = "6Dv3i18A0jXYLNy0MK5i88lE";

const createOrder = (req, res) => {
  let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });
  const { amount, currency } = req.body.send;
  console.log(amount, currency);
  // console.log("type", typeof(amount));
  var options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: currency,
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      console.log(err);
      return res.send({ code: 500, message: "Server Err." });
    }
    return res.send({ code: 200, message: "order created", data: order });
  });
};

const validatePayment = (req, res) => {
  let body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === req.body.response.razorpay_signature) {
    res.send({ code: 200, message: "Sign Valid" });
  } else {
    res.send({ code: 500, message: "Sign Invalid" });
  }
};

module.exports = {
    createOrder,
    validatePayment
}
