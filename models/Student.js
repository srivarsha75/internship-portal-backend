const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    branch: String,
    company: String,
    duration: String,
    stipend: Number,
    documents: {
        offerLetter: String,
        noc: String,
        certificate: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
