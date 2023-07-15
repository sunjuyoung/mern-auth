import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server start ${port}`));

//POST /api/users   -
//POST /api/users/auth   -
//POST /api/users/logout   -
//GET  /api/users/profile   -
//PUT  /api/users/profile   -
