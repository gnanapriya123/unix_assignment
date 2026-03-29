const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema
const AttendanceSchema = new mongoose.Schema({
    name: String,
    date: String,
    status: String
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);

// Routes
app.post("/mark", async (req, res) => {
    const record = new Attendance(req.body);
    await record.save();
    res.send("Attendance Marked");
});

app.get("/all", async (req, res) => {
    const data = await Attendance.find();
    res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));