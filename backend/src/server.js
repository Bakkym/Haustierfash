import "./database.js";
import morgan from "morgan";
import { createRoles } from './libs/initialSetup.js';
import express from "express";
import productRoutes from "./routes/products.routes.js";
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import wishlistRoutes from './routes/wishlist.routes.js'
import shoppingCarRoutes from './routes/shoppingCart.routes.js'
import cors from 'cors';

const app = express();


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

createRoles()

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", cors(corsOptions), productRoutes);
app.use("/api/auth", cors(corsOptions), authRoutes);
app.use("/api/users",cors(corsOptions), userRoutes);
app.use("/api/wishlist",cors(corsOptions), wishlistRoutes)
app.use("/api/cart", cors(corsOptions), shoppingCarRoutes )





const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
