//creating the server
import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";

import session from "express-session";
//import expressSession from "express-session";
import config from "./src/configs/index.js";
import logger from "./src/utils/logger.js";
import { connect } from "./src/utils/database.connection.js";
import { googleAuth } from "./src/configs/google.auth.js";
import { routesInit } from "./src/api/routes/index.js";

//const session = expressSession;

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      expires: new Date(Date.now() + 10000),
      maxAge: 10000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (re1, res, next) => {
  res.send("<a href='http://localhost:8090/auth/google'>Login with Google</a>");
  next();
});

app.listen(PORT, () => {
  logger.info(`Server is up and running on PORT ${PORT} `);
  connect();
  routesInit(app, passport);
  googleAuth(passport);
});

//013TEQR83QOg7pEm
//mongodb+srv://pulinduseniya:013TEQR83QOg7pEm@cluster0.dnuxj.mongodb.net/
