import express from "express";
import { auth } from "../../middleware/auth.middleware";
import { ProductController } from "../../controller/models/products";

const router = express.Router();
// router.use(auth);
router.use(auth);
router.route("/mockup/create").post(ProductController.mockupData)
router.route("/mockup/delete").delete(ProductController.mockupDelete)
router.route("/find").get(ProductController.findProduct)
export default router
