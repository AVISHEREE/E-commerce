import { Product } from "../models/products.model.js";

const addProduct = async (req, res) => {
  const { name, price, category, company, userID } = req.body;
  const user = new Product({
    name,
    price,
    category,
    company,
    userID,
  });
  const result = await user.save();
  console.log(name, price, category, company ,userID);
  res.send(result);
};

const showProducts = async (req,res)=>{
  const data = await Product.find();
  if(data.length>0){
    res.send(data)
  }
  else{
    res.send("no products found")
  }
  
} 

export { addProduct , showProducts };
