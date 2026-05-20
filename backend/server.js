const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Backend running successfully with Jenkins CI");
});

app.get("/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Mahesh Shinde",
            role: "Backend Developer"
        },
        {
            id: 2,
            name: "Tony Stark",
            role: "AI Engineer"
        }
    ];

    res.status(200).json({
        success: true,
        message: "Students fetched successfully..",
        totalStudents: students.length,
        data: students
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Server is healthy..."
    });
});

console.log("New Jenkins CI build triggered successfully");
//actually im using Jenkins locally , now i checked Poll SCM for continuoulsy monitor 
// the changes and rerun the build

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});