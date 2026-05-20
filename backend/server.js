const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Backend running successfully");
});

app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Mahesh Shinde"
        },
        {
            id: 2,
            name: "Tony Stark"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});