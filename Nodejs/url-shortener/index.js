const express = require("express");
const app = express();

const urlRoute = require("./routes/url");
const redirectUrlRoute = require("./routes/redirectUrl");

const connectToDB = require("./config");
const Url = require("./models/Url");

const PORT = 8000;

//DB Connection
connectToDB();

//Middleware
app.use(express.json());

//routes
app.use("/url", urlRoute);
app.use("/", redirectUrlRoute);


app.listen(PORT, () => {
  console.log("Server is listening on the Port: ", PORT);
});
