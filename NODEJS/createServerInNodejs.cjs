//http module
// it is used to create a server in node.js

//  --> creating a server
// import fs from'fs';

// import http from 'http';
require("dotenv").config();
const http= require('http');
const fs =require('fs');

const host = process.env.HOST;
const port = process.env.PORT;
let server=http.createServer((req,res)=>{
    if(req.url=="/"){
        // res.write("server get started");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let streamRead=fs.createReadStream(__dirname+"/about.html","utf8");
        streamRead.pipe(res);
    }else if(req.url=="/junaid"){
      //  res.write("Your request is for mobile");
        //res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let streamRead=fs.createReadStream(__dirname+"/AgeCalculator.html","utf8");
        streamRead.pipe(res);
    } else if(req.url=="/laptop"){
        // res.write("Your request is for laptop");
        // res.end();
    }
});
server.listen(9999,()=>{
    console.log("server created  on port 9999 successfully");
})