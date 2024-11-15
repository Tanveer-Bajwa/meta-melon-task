require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const todoRoutes = require("./routes/todo");
const carRoutes = require('./routes/car');

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello, World!" });
});
app.use("/api/auth/v1", authRoutes);
app.use("/api/todos/v1", todoRoutes);
app.use('/api/cars/v1', carRoutes);

module.exports = app;
