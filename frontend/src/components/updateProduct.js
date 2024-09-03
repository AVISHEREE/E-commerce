import React ,{useState} from "react";

const UpdateProduct = () => {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [company, setcompany] = useState("")
    const update = async ()=>{
        console.log(name,price,category,company);
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
        />
        <input
          className="inputBox"
          type="number"
          placeholder="Enter price to update"
          onChange={(e)=>setprice(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter category to update"
          onChange={(e)=>setcategory(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter company to update"
          onChange={(e)=>setcompany(e.target.value)}
        />
        <button className="signUpBtn" onClick={update}>
          update
        </button>
      </div>
    </>
  );
};

export default UpdateProduct;
