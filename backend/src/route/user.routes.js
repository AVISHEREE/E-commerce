import { Router } from "express";
import { registerUser, userLogin } from "../controllers/user.controller.js";
import { addProduct } from "../controllers/product.controller.js";
const UserRouter = Router();

UserRouter.route('/signup').post(registerUser);
UserRouter.route('/login').post(userLogin);
UserRouter.route('/add-product').post(addProduct);


export default UserRouter;