import { Router } from "express";
import { addProduct , showProducts , deleteProduct , updateProduct , getSingleProduct , searchProduct } from "../controllers/product.controller.js";
import verifyJwt from "../middleware/auth.middleware.js";
const productRouter = Router();

productRouter.route('/add-product').post(verifyJwt,addProduct);
productRouter.route('/products').get(verifyJwt,showProducts);
productRouter.route('/delete-product/:id').delete(verifyJwt,deleteProduct);
productRouter.route('/update-product/:id').post(verifyJwt,updateProduct);
productRouter.route('/:id').get(verifyJwt,getSingleProduct);
productRouter.route('/search-product/:key').get(verifyJwt,searchProduct);

export default productRouter