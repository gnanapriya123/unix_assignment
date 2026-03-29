const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path=require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/attendance");

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

app.delete("/delete/:id", async (req, res) => {
    try {
        const deleted = await Attendance.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).send("Record not found");
        }

        res.send("Deleted successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting");
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log("Server running on port 5000"));