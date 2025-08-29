// This is our server which initializes and starts the server, making the application accessible.
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.connection.js"
import app from "./app.js";

const startServer = async () => {
  try {
    // DB connection
    await connectDB();

    // Start server
    app.listen(ENV.PORT, () => {
      console.log(
        `Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`
      );
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
