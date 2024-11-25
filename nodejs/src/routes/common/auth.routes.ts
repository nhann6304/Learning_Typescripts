import express, { Request, Response } from "express";
import { auth } from "../../middleware/auth.middleware";
import { authController } from "../../controller/common/auth";

const router = express.Router();
router.use(auth);
router.post("/login", authController.login);
router.post("/register", authController.register);



export default router;
