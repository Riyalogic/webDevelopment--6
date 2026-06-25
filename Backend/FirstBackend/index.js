import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import dbConnectionConfig from "./src/config/dbConnection.config.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

//Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backened Project" });
});

//default Error Handler

app.use((err,req,res,next)  => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({message: ErrMessage});
});

// app.post("/login", (req, res) => {
//   res.json({ message: "Login successfull" });
// });

// app.post("/logout", (req, res) => {
//   res.json({ message: "Logout successfull" });
// });

// app.post("/register", (req, res) => {
//   res.json({ message: "register successfull" });
// });

// app.put("/update", (req, res) => {
//   res.json({ message: "update successfull" });
// });

// app.delete("/delete", (req, res) => {
//   res.json({ message: "delete successfull" });
// });

const port = process.env.Port || 5000;

app.listen(port, () => {
  console.log("Server Started on PORT: ", port);
  connectDB();
});
