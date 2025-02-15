//creating the server
import express from "express";
import cors from "cors";
import 'dotenv/config';
import logger from "./src/utils/logger.js"
import { connect } from "./src/utils/database.connection.js"

const app = express();
const PORT = process.env.PORT || "8091";

app.use(cors());
app.use(express.json({ limit: "20mb"}));

app.get("/", (re1, res, next) => {
  res.send("<h2>📖 Library Management System API<h2>")
  next();
})

app.listen(PORT, () => {
  logger.info(`Server is up and running on PORT ${PORT} `);
  connect();
});

//013TEQR83QOg7pEm
//mongodb+srv://pulinduseniya:013TEQR83QOg7pEm@cluster0.dnuxj.mongodb.net/