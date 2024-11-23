import express, { Request, Response } from "express";
import { auth } from "../../middleware/auth.middleware";
import { findAllTask } from "../../controller/models/task.controller";


const router = express.Router();
router.use(auth);
router.route("/find-all").get(findAllTask)


export default router