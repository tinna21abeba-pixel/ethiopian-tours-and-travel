
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tourRoutes = require("./src/routes/tourRoutes");

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/tours", tourRoutes);

const port=process.env.PORT || 5000;



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});   
      // connect with database
const pool = require("./src/config/db");

pool.query("SELECT NOW()")
    .then(result => {
        console.log("Database Connected!");
        console.log(result.rows[0]);
    })
    .catch(error => {
        console.error(error);
    });
