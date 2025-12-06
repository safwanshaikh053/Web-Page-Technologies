import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProductComp = () => {
    const nav =useNavigate(); // use for automatic navigation
    const [product,setProduct] = useState({
        pname:"",
        pprice:"",
        pcompany:"",
        pquantity:""
    })
    const inputChangeHander = (event)=>{
    //   console.log(event.target.type);
    //   console.log(event.target.name);
    //   console.log(event.target.value);
    const {type,name,value} = event.target;
    setProduct({...product,[name]:value});
    }
    const addProduct =(event)=>{
        event.preventDefault();
        // console.log(product);
        axios.post("http://localhost:8888/product",product).then(()=>{
            window.alert("Product addedd successfully");
            nav("/maindashboard/productdash");
        }).catch()
    }
    return (
        <div>
            <h2>Add Product Comp</h2>
            <form onSubmit={addProduct}>
                <input type='text' name='pname' onChange={inputChangeHander} value={product.pname} /> <br/>
                <input type='text' name='pprice' onChange={inputChangeHander} value={product.pprice} /><br/>
                <input type='text' name='pcompany' onChange={inputChangeHander} value={product.pcompany} /><br/>
                <input type='text' name='pquantity' onChange={inputChangeHander} value={product.pquantity} /><br/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductComp
