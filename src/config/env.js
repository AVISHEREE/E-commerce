// src/config/env.js
import dotenv from "dotenv";

// Load variables from .env file into process.env
dotenv.config();

// Central config object
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,

  // Database
  MONGO_URI: process.env.MONGO_URI,

  // JWT Auth
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  // Payment keys (optional, for later)
  STRIPE_KEY: process.env.STRIPE_KEY || "",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "",

  // Client
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5500",
};
