// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const Stripe = require('stripe');
const mongoose = require('mongoose');

const authRoutes = require('./route/route'); // make sure this file exists

dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Auth routes (Login/Signup)
app.use("/api/auth", authRoutes);

// Stripe checkout route
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: "http://localhost:5173/order-confirmation?clearCart=true",
      cancel_url: "http://localhost:5173/cart",
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error("❌ Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
