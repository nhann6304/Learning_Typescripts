import express, { Request, Response } from "express";
import { people } from "../../data/data";
import { create } from "../../controller/common/auth/auth.controller";
import { auth } from "../../middleware/auth.middleware";

const router = express.Router();
router.use(auth);
router.post("/login", create);



export default router;
