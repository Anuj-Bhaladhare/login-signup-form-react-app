const express = require("express");
const database = require("./config/dataBase");
const userRoutes = require("./routes/User");
require("dotenv").config(); 

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());


database.connect();

app.use("/api/v1/auth", userRoutes);

app.listen(PORT, () => { 
    console.log(`server started at PORT number ${PORT}`);
});
