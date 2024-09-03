import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        showProducts()
    }, [])
    const updateProduct = async () =>{
        console.log("hello world");
        
    }
    const showProducts = async () =>{
        const data = await fetch("http://localhost:5000/v1/product/products");
        const result =  await data.json();
        setProducts(result)
        
    }
    
    return (
        <>
        <div>Products</div>
        {products.map((e)=>
        <ul>
            <li>Poduct name:{e.name}</li>
            <li>Poduct Price:{e.price}</li>
            <li>Poduct category:{e.category}</li>
            <li>Poduct company:{e.company}</li>
            <button onClick={updateProduct}><Link to={'/update/'+e._id}>Update</Link></button>&nbsp;&nbsp;
            <button><Link>Delete</Link></button>
        </ul>
        )}
        </>
    )
}

export default ProductList;