const express = require("express");
const app = express();

const urlRoute = require("./routes/url");
const connectToDB = require("./config");
const Url = require("./models/Url");

const PORT = 8000;

//DB Connection
connectToDB();

//Middleware
app.use(express.json());

//routes
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortId },
    { $push: { visitedHistory: { timestamp: Date.now() } } },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ message: 'Short URL not found' });
  }

  res.redirect(entry.redirectURL);
});


app.listen(PORT, () => {
  console.log("Server is listening on the Port: ", PORT);
});
