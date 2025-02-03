const express = require('express');
const dotenv = require('dotenv');
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Server is Running!");
    }
);

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})