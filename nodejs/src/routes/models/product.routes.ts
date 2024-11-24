import express from "express";
import { auth } from "../../middleware/auth.middleware";
import { ProductController } from "../../controller/models/products";


const router = express.Router();
router.use(auth);
router.route("/mockup").post(ProductController.mockupData)
export default router
