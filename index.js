import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./routes/user.js";
import bookRoute from "./routes/books.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/user", userRoute);
app.use("/", bookRoute);

// app.get("/", (req, res) => {
//   res.send("App is running");
// });

const CONNECTION_URL =
  "mongodb+srv://ZawHtet:zawhtet150mongodb@cluster0.fpdqu.mongodb.net/Books?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connct`));
