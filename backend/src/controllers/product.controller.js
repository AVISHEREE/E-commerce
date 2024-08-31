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

export { addProduct };
