import React,{useState} from "react";

const AddProduct = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const addCollection = () =>{
        console.log(name,price,category,company);
    }
    return(
        <>
        <div className="body">
        <h1>Add Your Product</h1>
        <input
          className="inputBox"
          type="text"
          onChange={(e)=>{setName(e.target.value)}}
          value={name}
          placeholder="Enter your product name"
        />
        <input
          className="inputBox"
          type="number"
          onChange={(e)=>{setPrice(e.target.value)}}
          value={price}
          placeholder="Enter your product price"
        />
        <input
          className="inputBox"
          type="text"
          onChange={(e)=>{setCategory(e.target.value)}}
          value={category}
          placeholder="Enter your product category"
        />
        <input
          className="inputBox"
          type="text"
          onChange={(e)=>{setCompany(e.target.value)}}
          value={company}
          placeholder="Enter your product company"
        />
        <button className="signUpBtn" onClick={addCollection}>
          Sign Up
        </button>
      </div>
        </>
    );
};

export default AddProduct