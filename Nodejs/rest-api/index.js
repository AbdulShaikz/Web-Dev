const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const connectToDB = require("./config");
const { logReqResponse } = require('./middlewares')

const PORT = 8000;

// Connection to MongoDB
connectToDB();

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Added to parse JSON bodies

// Custom Middleware for logging requests
app.use(logReqResponse('log.txt'));

// User Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
