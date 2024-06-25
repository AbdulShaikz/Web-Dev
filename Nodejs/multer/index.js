const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT =8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        console.log(req.body);
        console.log(file);
        return cb(null,"./uploads");
    },
    filename: function (req, file, cb){
        return cb(null,`${file.originalname}-${Date.now()}`);
    }
});

const upload = multer({storage});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    return res.render('homepage');
})

app.post('/upload', upload.single('image') ,(req, res) => {
    return res.redirect("/");
});

app.listen(PORT, () => {
    console.log("Server started at PORT: ",PORT);
})