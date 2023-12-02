const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_79aimvjGGIKYEa', // Replace with your actual Razorpay API key ID
  key_secret: 'GAgByHE2gaGIhHdbZmiqt9VO', // Replace with your actual Razorpay API key secret
});

app.post('/razorpay/order', async (req, res) => {
  try {
    // You can implement your own logic to calculate the order amount
    const orderAmount = req.body.planAmount;

    const options = {
      amount: orderAmount,
      currency: 'INR',
      receipt: 'order_rcptid_11',
      payment_capture: 1,
    };

    const response = await razorpay.orders.create(options);

    res.json({
      id: response.id,
      amount: response.amount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
