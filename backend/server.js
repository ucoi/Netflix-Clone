import express from "express";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json()); 
const PORT = ENV_VARS.PORT;

app.use("/api/v1/auth", authRoutes); // if u visit this route it will go to authRoutes

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
