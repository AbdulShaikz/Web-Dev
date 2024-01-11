const fs = require('fs');

//Creating files
fs.writeFileSync('fileSync1.txt',"Hello, Nodejs!"); // synchronous call | overrides the content of the file if file already exists

fs.writeFile('fileAsync1.txt', "Hello, Async Nodejs!", (err)=>{ }); // asynchronous call

//Reading files
let syncFileContent = fs.readFileSync('./fileSync1.txt',"utf-8");
console.log("Sync File Content: ", syncFileContent);

fs.readFile('./fileAsync1.txt',"utf-8", (err,result) => {
    if(err){
        console.error(err);
    }else{
        console.log("Async File Content: ", result);
    }
})

//Appending Files
fs.appendFileSync("./fileSync1.txt","Appending the sync file");
syncFileContent = fs.readFileSync('./fileSync1.txt',"utf-8");
console.log("Sync File Content: ", syncFileContent);

//Copy files
fs.copyFileSync("./fileSync1.txt","./fileSync1Copy.txt");

//Delete files
fs.unlinkSync("./fileSync1Copy.txt");