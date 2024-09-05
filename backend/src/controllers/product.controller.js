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

const deleteProduct = async (req,res) =>{
try {
    const data = req.params;  
    const result = await Product.deleteOne({_id:data.id});
    if(result.deletedCount<1){
      res.send("no data found")
      return false
    }
    res.send(result)
} catch (error) {
  res.send(`Error in deleteing product ${error}`);
}
}

const updateProduct = async (req,res) =>{
  const data = req.body
  const result = await Product.updateMany({_id:req.params.id},{
    $set:req.body
  })
  res.send(result)
}

const getSingleProduct = async(req,res)=>{
  const data = await req.params
  const result = await Product.findOne({_id:data.id})
  res.send(result)
}

const searchProduct = async(req,res) =>{
  const data = await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      {company:{$regex:req.params.key}}
    ]
  })
  res.send(data)
}

export { addProduct , showProducts , deleteProduct , updateProduct , getSingleProduct , searchProduct };
