const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const waitlistRoutes = require("./routes/waitlistRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Game Waitlist API is running",
  });
});

// Waitlist Routes
app.use("/api/waitlist", waitlistRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;