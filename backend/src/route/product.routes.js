import { Router } from "express";
import { addProduct , showProducts , deleteProduct , updateProduct , getSingleProduct , searchProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route('/add-product').post(addProduct);
productRouter.route('/products').get(showProducts);
productRouter.route('/delete-product/:id').delete(deleteProduct);
productRouter.route('/update-product/:id').post(updateProduct);
productRouter.route('/:id').get(getSingleProduct);
productRouter.route('/search-product/:key').get(searchProduct);

export default productRouter