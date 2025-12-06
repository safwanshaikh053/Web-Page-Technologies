import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const EditProductComp = () => {
      const nav = useNavigate();
      const {id} = useParams();
 const [product,setProduct] = useState({
        id:"",
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

    useEffect(()=>{
      axios.get(`http://localhost:8888/product/${id}`).then((res)=>{
        console.log(res.data);
        setProduct(...res.data);
      }).catch()
    },[]);

     const addProduct =(event)=>{
        event.preventDefault();
        // console.log(product);
        axios.put(`http://localhost:8888/product/${id}`,product).then(()=>{
            window.alert("Product Updated successfully");
            nav("/maindashboard/productdash");
        }).catch()
    }
    return (
        <div>
            <h2>EditProductComp</h2>
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

export default EditProductComp
