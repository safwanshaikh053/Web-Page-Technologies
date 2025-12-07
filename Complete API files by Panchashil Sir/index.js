const con = require('./connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res,next)=>{
    res.send("Welcome You All In My REST API");
});

app.get("/product",(req,res,next)=>{
    // res.send("this is simple get request for product");
    con.query("SELECT * FROM products",(error,result)=>{
        if(error) throw error;
        // console.log(result); 
        res.send(result);
    })
});
app.get("/product/:id",(req,res,next)=>{
    // res.send("this is simple get request for product");
    con.query(`SELECT * FROM products WHERE id=${req.params.id}`,(error,result)=>{
        if(error) throw error;
        // console.log(result); 
        res.send(result);
    })
});

app.delete("/product/:id",(req,res,next)=>{
    //  res.send(req.params.id);
    con.query(`DELETE FROM products WHERE id=${req.params.id}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    })
});

app.post("/product",(req,res,next)=>{
    // res.send("this is simple post request for product");
    // let pname = req.body.pname;
    // let pprice = req.body.pprice;
    // let pcompany = req.body.pcompany;
    // let pquantity = req.body.pquantity;
    const {pname,pprice,pcompany,pquantity} = req.body;

    let insertQuery = `INSERT INTO products(pname,pprice,pcompany,pquantity) VALUES(?,?,?,?)`;

   con.query(insertQuery,[pname,pprice,pcompany,pquantity],(error,result)=>{
      res.send(`Product added successfully`,result);
   })
  
});

app.put("/product/:id",(req,res,next)=>{

    const {id} = req.params;
    const {pname,pprice,pcompany,pquantity} = req.body;
    let updateQuery = `UPDATE products SET pname=?,pprice=?,pcompany=?,pquantity=? WHERE id=${id}`;
   
    con.query(updateQuery,[pname,pprice,pcompany,pquantity],(error,result)=>{
        res.send("Product Updated Successfully");
    })
});

app.listen(8888,()=>{
    console.log(`server get started..`);
})
