const path = require('path');
const express = require('express');
const userRoute = require('./routes/user');

const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/", (req, res)=> {
    res.render("home")
});

app.use('/user',userRoute);

app.listen(PORT, () => {
    console.log("Server is running on the PORT: ", PORT)
})