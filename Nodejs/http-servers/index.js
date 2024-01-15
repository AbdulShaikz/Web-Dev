const http = require('http');

const server = http.createServer((req,res) => {
    // console.log("Req: ", req);
    // console.log(req.headers);
    res.end("Server has been created!");
});

server.listen(8000,()=>{
    console.log("Server has started at port 8000!");
})

