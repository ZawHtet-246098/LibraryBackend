// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";

// import userRoute from "./routes/user.js";
// import bookRoute from "./routes/books.js";

// const app = express();
// // hello

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send(`App is runnging`);
// });


// app.use("/user", userRoute);
// app.use("/books", bookRoute);



// const CONNNECTION_URL =
//   "mongodb+srv://ZawHtet:zawhtet150mongodb@cluster0.fpdqu.mongodb.net/Books?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))
//   )
//   .catch((error) => console.log(`${error} did not connect`));


import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import postRoutes from "./routes/posts.js";
// import userRoute from "./routes/user.js";
// import placesRoute from "./routes/places.js";
// import hotelRoute from "./routes/hotel.js";

const app = express();
// hello

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send(`App is runnging`);
});

// app.use("/user", userRoute);
// app.use("/posts", postRoutes);
// app.use("/places", placesRoute);
// app.use("/hotels", hotelRoute);



const CONNNECTION_URL =
  "mongodb+srv://ZawHtet:zawhtet150travel@cluster0.xreb3.mongodb.net/Authentication?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));