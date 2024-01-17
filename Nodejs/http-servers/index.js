const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) => {

    console.log("Request Url: ", req.url);
    let fileData = `Requested url: ${req.url}\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    const query = myUrl.query;  //Extracting query present in the url
    console.log("My query is: ", query);
    fs.appendFile('logs.txt',fileData, (err, data)=>{
        if(req.url==="/favicon.ico") return res.end();
        switch(req.url){
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("Abdul Shaik");
                break;
            default:
                res.end("404 Not found!");
                break;
        }
    });
    // console.log(req.headers);
    //res.end("Server has been created!");
});

server.listen(8000,()=>{
    console.log("Server has started at port 8000!");
})