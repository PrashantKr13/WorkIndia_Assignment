const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is Running!");
    }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})