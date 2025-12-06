import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDashComp = () => {
    // create state in function 
   const  [product,setProduct] = useState([]);

     const fetchData = ()=>{
        axios.get('http://localhost:8888/product').then((res)=>{
            // console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
     }

     useEffect(()=>{
       fetchData();
     },[]);

    const deleteProduct = (id)=>{
        if(window.confirm(`Are you sure to delete product with id:${id}`)){
             axios.delete(`http://localhost:8888/product/${id}`).then(()=>{
            window.alert("product deleted seccessfully");
            fetchData();
        }).catch((error)=>{});
        }
       
    }

    return (
        <div>
            <h2>This is ProductDashComp</h2>
             
             <Link to="/maindashboard/addproduct" className='btn btn-primary mb-3'>Add</Link>

            <table className='table table-bordered table-hover'>
             <thead>
                <th>Sr.No</th><th>Name</th><th>Company</th><th>Price</th><th>Quantity</th><th>Actions</th>
             </thead>
             <tbody>
                {
                    product.map((val,index)=>{
                        return <tr>
                            <td>{val.id}</td>
                            <td>{val.pname}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pquantity}</td>
                            <td>
                               <Link to={`/maindashboard/editproduct/${val.id}`}>Edit</Link> |
                                <button type='button' onClick={()=>deleteProduct(val.id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
             </tbody>
            </table>
        </div>
    )
}

export default ProductDashComp
