import "./database.js";
import morgan from "morgan";
import { createRoles } from './libs/initialSetup.js';
import express from "express";
import productRoutes from "./routes/products.routes.js";
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

createRoles()

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);





const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
