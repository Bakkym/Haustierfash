import "./database.js";
import morgan from "morgan";
import { createRoles, createCategories } from './libs/initialSetup.js';
import express from "express";
import productRoutes from "./routes/products.routes.js";
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import wishlistRoutes from './routes/wishlist.routes.js'
import shoppingCarRoutes from './routes/shoppingCart.routes.js'
import categoryRoutes from './routes/category.routes.js'
import roleRoutes from './routes/role.routes.js'
import cors from 'cors';

const app = express();

var whitelist = ['http://localhost', 'http://localhost:3000', 'http://54.225.106.35']

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: true } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


createRoles()
createCategories()

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", cors(corsOptionsDelegate), productRoutes);
app.use("/api/auth", cors(corsOptionsDelegate), authRoutes);
app.use("/api/users", cors(corsOptionsDelegate), userRoutes);
app.use("/api/wishlist", cors(corsOptionsDelegate), wishlistRoutes)
app.use("/api/cart", cors(corsOptionsDelegate), shoppingCarRoutes)
app.use("/api/categories", cors(corsOptionsDelegate), categoryRoutes)
app.use("/api/roles", cors(corsOptionsDelegate), roleRoutes)




const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
