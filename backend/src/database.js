import { MONGODB_URI } from './config.js'
import mongoose from 'mongoose';

//db connection
mongoose.connect(MONGODB_URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));