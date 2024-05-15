const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.set('view engine','ejs');


app.get('/', (req,res) => {
    fs.readdir('./files', (err,files) => {
        res.render("index", {files: files});
    })
});

app.post('/create', (req,res) => {
    fs.writeFile(`./files/${req.body['task-title'].split(" ").join('')}.txt`, req.body['task-details'], (err) => {
        res.redirect('/');
    });
});

app.get('/files/:filename', (req,res) => {
    fs.readFile(`./files/${req.params.filename}`,'utf-8', (err, filedata) => {
        res.render('details',{filename: req.params.filename, filedata: filedata})
    })
});

app.get('/edit/:filename', (req, res) => {
    res.render('edit',{filename: req.params.filename});
});


app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.oldtitle}`,`./files/${req.body.newtitle}`, (err) => {
        res.redirect('/');
    })
});

app.get('/delete/:filename', (req,res) => {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        res.redirect("/");
    })
})
app.listen(3000);