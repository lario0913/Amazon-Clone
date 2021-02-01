const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const {request} = require("express");
const stripe = require("stripe")("sk_test_mBzNd2PYngAHGoVRZ9eQ02nU00vvXcn8Mu");


// API


// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("helloword")
);
app.post("/payments/create", async (req, res) =>{
  const total = req.query.total;
  console.log("Payment request received: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
