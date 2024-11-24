import express, { Request, Response } from "express";
import { people } from "../../data/data";
import { create } from "../../controller/common/auth/auth.controller";

const router = express.Router();

router.post("/login", create);



export default router;
