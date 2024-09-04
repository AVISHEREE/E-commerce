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
        <ul className="products-ul" style={{marginRight:'120px',color:'red'}}>
            <li>product name</li>
            <li>product price</li>
            <li>product category</li>
            <li>product company</li>
        </ul>
        {products.map((e)=>
        <ul className="products-ul">
            <li>{e.name}</li>
            <li>{e.price}</li>
            <li>{e.category}</li>
            <li>{e.company}</li>
            <button onClick={updateProduct}><Link to={'/update/'+e._id}>Update</Link></button>&nbsp;&nbsp;
            <button><Link>Delete</Link></button>
        </ul>
        )}
        </>
    )
}

export default ProductList;