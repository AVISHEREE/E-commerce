//This is our App written in Express,
//Which will have we will set routes Express application instance, configures middleware, sets up routes, 
//and handles various application-specific functionalities like database connections, 
//authentication, and error handling.
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ENV } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

if (ENV.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes placeholder
app.get("/", (req, res) => {
  res.send("API is running...");
});

//For Error errorhandler
app.use(errorHandler);

export default app;
