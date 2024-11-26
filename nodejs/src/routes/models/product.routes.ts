import express from "express";
import { auth } from "../../middleware/auth.middleware";
import { ProductController } from "../../controller/models/products";

const router = express.Router();
// router.use(auth);
router.use(auth);
router.route("/mockup/create").post(ProductController.mockupData)
router.route("/mockup/delete").delete(ProductController.mockupDelete)
router.route("/create").post(ProductController.createProduct)
router.route("/find").get(ProductController.findProduct)
router.route("/find").get(ProductController.findProduct)
router.route("/upload-local").post(ProductController.uploadProductImageLocal)
router.route("/upload-cloud").post(ProductController.uploadProductImageCloud)
export default router
