require("dotenv").config();
import mongoose from 'mongoose';

//db connection
mongoose.connect(process.env.MONGODB_URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));