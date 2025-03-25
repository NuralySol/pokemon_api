const express = require('express');
const morgan = require('morgan');
const path = require('path');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mount routes
app.use("/", require("./routes/ui.js"));       //* EJS views for the frontend views
app.use("/api", require("./routes/index.js"));    //* REST API:

// Start server
app.listen(PORT, () => {
    console.log(`Port is running at port ${PORT}`);
});