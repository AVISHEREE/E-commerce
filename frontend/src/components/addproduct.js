import React,{useState} from "react";

const AddProduct = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error,setError] = useState(false)
    const userID = JSON.parse(localStorage.getItem('user'))._id
    const addCollection = async () =>{
      if(!name || !price || !category || !company){
        setError(true)
        return false
      }
      const result = await fetch("http://localhost:5000/v1/product/add-product",{
        method:"POST",
        body:JSON.stringify({name,price,category,company,userID}),
        headers:{
         "Content-Type":"application/json"
        }
      });
      const data = await result.json();
      console.log(data);
      setName("")
      setPrice("")
      setCategory("")
      setCategory("")
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
        {error&& !name && <span>please enter name</span>}
        <input
          className="inputBox"
          type="number"
          onChange={(e)=>{setPrice(e.target.value)}}
          value={price}
          placeholder="Enter your product price"
        />
        {error&& !price && <span>please enter price</span>}
        <input
          className="inputBox"
          type="text"
          onChange={(e)=>{setCategory(e.target.value)}}
          value={category}
          placeholder="Enter your product category"
        />
        {error&& !category && <span>please enter category</span>}
        <input
          className="inputBox"
          type="text"
          onChange={(e)=>{setCompany(e.target.value)}}
          value={company}
          placeholder="Enter your product company"
        />
        {error&& !company && <span>please enter comapny</span>}
        <button className="signUpBtn" onClick={addCollection}>
          add 
        </button>
      </div>
        </>
    );
};

export default AddProduct