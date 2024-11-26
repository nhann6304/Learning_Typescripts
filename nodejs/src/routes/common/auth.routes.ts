import express, { Request, Response } from "express";
import { auth } from "../../middleware/auth.middleware";
import { authController } from "../../controller/common/auth";

const router = express.Router();
router.post("/login", authController.login);
router.post("/register", authController.register);
router.use(auth);
router.post("/logout", authController.logout);
router.get("/get-me", authController.getMe);



export default router;
