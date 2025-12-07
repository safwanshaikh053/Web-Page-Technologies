const mysql = require('mysql');

const con = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"myproject"
});

con.connect((error)=>{
    if(error) throw error;
    console.log("connection done successfully...");
});

module.exports= con;