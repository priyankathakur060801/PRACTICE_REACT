import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import router from "./routes/userRoutes.js";

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 4000;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect db
connectDB();

//routes
app.use("/api/status", (req, res) => {
  res.send("server is live");
});
app.use("/api/users", router);

//Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
