import express, { Request } from "express";
import { JobController } from "../../controller/models/jobs";

const router = express.Router();


router.route("/create").get(JobController.create)


export default router