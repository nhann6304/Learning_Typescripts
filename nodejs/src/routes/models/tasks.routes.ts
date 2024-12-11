import express, { Request, Response } from "express";
import { auth } from "../../middleware/auth.middleware";
import { TaskController } from "../../controller/models/tasks";


const router = express.Router();
router.use(auth);
router.route("/create").post(TaskController.createTask)
router.route("/find-all").get(TaskController.findAllTask)
router.route("/delete").delete(TaskController.deletedTask)
router.route("/update").patch(TaskController.updateTask)


export default router