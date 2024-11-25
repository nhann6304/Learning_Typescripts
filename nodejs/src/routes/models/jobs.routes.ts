import express, { Request } from "express";
import { JobController } from "../../controller/models/jobs";

const router = express.Router();
router.route("/create").post(JobController.create)
router.route("/update").patch(JobController.update)
router.route("/find").get(JobController.find)
router.route("/delete").delete(JobController.deleted)


export default router