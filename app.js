const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/templates", express.static(path.join(__dirname, "templates")));

// MongoDB connection (replace with your local/atlas URI)
mongoose.connect("mongodb://127.0.0.1:27017/internships", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/students", studentRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
