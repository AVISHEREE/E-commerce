import { Router } from "express";
import { addProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route('/add-product').post(addProduct);

export default productRouter