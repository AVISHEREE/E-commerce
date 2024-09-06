import React ,{useEffect, useState} from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";
const UpdateProduct = () => {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [company, setcompany] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{
      getProductDetails();
    },[])
    const getProductDetails = async() =>{
      const data = await fetch(`http://localhost:5000/v1/product/${params.id}`,{
        headers:{
          "Authorization":`${JSON.parse(localStorage.getItem('auth'))}`
        }
      })
      let result = await data.json()
      setname(result.name)
      setprice(result.price)
      setcategory(result.category)
      setcompany(result.company)
    }
    const update = async ()=>{
      const update = await fetch(`http://localhost:5000/v1/product/update-product/${params.id}`,{
        method:"POST",
        body:JSON.stringify({name,price,category,company}),
        headers:{
          "Content-Type":"application/json",
          "Authorization":`${JSON.parse(localStorage.getItem('auth'))}`
        }
      });
      const result = await update.json();
      console.log(result);
      navigate('/products')
    }
  return (
    <>
      <div className="body">
        <h1>update Product</h1>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter name to update"
          onChange={(e)=>setname(e.target.value)}
          value={name}
        />
        <input
          className="inputBox"
          type="number"
          placeholder="Enter price to update"
          onChange={(e)=>setprice(e.target.value)}
          value={price}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter category to update"
          onChange={(e)=>setcategory(e.target.value)}
          value={category}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter company to update"
          onChange={(e)=>setcompany(e.target.value)}
          value={company}
        />
        <button className="signUpBtn" onClick={update}>
          update
        </button>
        <button  className="signUpBtn" ><Link to={'/products'}>back to products page</Link></button>
      </div>
    </>
  );
};

export default UpdateProduct;
