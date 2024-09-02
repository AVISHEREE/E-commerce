import { Router } from "express";
import { addProduct , showProducts } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route('/add-product').post(addProduct);
productRouter.route('/products').get(showProducts);

export default productRouter