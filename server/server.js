require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./src/routes/costumes");
const app = express();



//db connection
mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
