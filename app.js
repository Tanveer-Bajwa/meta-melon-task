require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");
const cors = require("cors");
const sequelize = require("./config/db");


const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error connecting to the database:', err));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});
app.use("/api/auth/v1", authRoutes);
app.use("/api/auth/", taskRoutes);


module.exports = app;
