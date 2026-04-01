import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/check-ip", (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const blacklistedIPs = JSON.parse(process.env.IP_BLACKLIST || "[]");

  console.log("Client IP:", clientIP);
  console.log("Blacklisted IPs:", blacklistedIPs);

  if (blacklistedIPs.includes(clientIP)) {
    return res.status(403).json({
      allowed: false,
      clientIP: clientIP,
      message: "Access denied - IP is blacklisted",
    });
  }

  res.json({ allowed: true, clientIP: clientIP });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다: ", error));

app.listen(PORT, () => {
  console.log("Server is running");
});
