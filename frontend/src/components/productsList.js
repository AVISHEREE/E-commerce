import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () =>{
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        if(searchText !== ""){
            searchProduct();
        }else{
            showProducts()
        }
    },[searchText])
    useEffect(() => {
        showProducts()
    }, [])
    const searchProduct = async () =>{
   if (searchText.trim()!=="") {
         const data = await fetch(`http://localhost:5000/v1/product/search-product/${searchText}`,{
            headers:{
                "Authorization":`${JSON.parse(localStorage.getItem('auth'))}`
            }
         })//serach the product in the database and it will show resul
         const result = await data.json();//data is converted into string 
         setProducts(result);//update the propduct list
   }
   else{
    showProducts()
   }
    }
    const showProducts = async () =>{
        const data = await fetch("http://localhost:5000/v1/product/products",{
            headers:{
                "Authorization":`${JSON.parse(localStorage.getItem('auth'))}`
            }
        });
        const result =  await data.json();
        setProducts(result)
    }
    const deleteProduct = async (id) =>{
        let confirmation = window.confirm("delete the product?");
        if(confirmation){
        const data = await fetch(`http://localhost:5000/v1/product/delete-product/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`${JSON.parse(localStorage.getItem('auth'))}`
            }
        });
        const result = await data.json();
        console.log(result);
        if(result){
            alert("product deleted")
            showProducts()
        }
        }
        else{
            return false;
        }
    }
    
    return (
        <>
        <div className="searchBar">
        <input type="text" placeholder="search your product here" onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={searchProduct}>search</button>
        </div>
        <ul className="products-ul" style={{marginRight:'120px',color:'red'}}>
            <li>product name</li>
            <li>product price</li>
            <li>product category</li>
            <li>product company</li>
        </ul>
        {products.length > 0?products.map((e)=>
        <ul className="products-ul">
            <li>{e.name}</li>
            <li>{e.price}</li>
            <li>{e.category}</li>
            <li>{e.company}</li>
            <button><Link to={'/update/'+e._id}>Update</Link></button>&nbsp;&nbsp;
            <button onClick={()=>deleteProduct(e._id)}>Delete</button>
        </ul>
        ):<p>nothing found</p>}
        </>
    )
}

export default ProductList;