const express = require('express');
const app = express();

const path = require('path');
const userModel = require('./models/user.models.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("users",{users})
});

app.post('/create', async (req, res) => {
    let {name, email, profilePicUrl} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        profilePicUrl,
    })
    res.redirect("/read");
})

app.listen(3000);