import React, { useState , useEffect } from "react";

const ProductList = () =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        showProducts()
    }, [])
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
        </ul>
        )}
        </>
    )
}

export default ProductList;