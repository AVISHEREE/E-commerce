import { Router } from "express";
import { addProduct , showProducts , deleteProduct , updateProduct , getSingleProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route('/add-product').post(addProduct);
productRouter.route('/products').get(showProducts);
productRouter.route('/delete-product/:id').delete(deleteProduct);
productRouter.route('/update-product').post(updateProduct);
productRouter.route('/:name').get(getSingleProduct);

export default productRouter