import express, { Request } from "express";
import { JobController } from "../../controller/models/jobs";
import { auth } from "../../middleware/auth.middleware";

const router = express.Router();
router.use(auth);
router.route("/create").post(JobController.create)
router.route("/update/:id").patch(JobController.update)
router.route("/find").get(JobController.find)
router.route("/delete/:id").delete(JobController.deleted)


export default router