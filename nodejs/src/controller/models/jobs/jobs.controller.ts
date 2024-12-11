import express, { Request, Response } from "express"
import { OK } from "../../../core/success.response"
import mongoose from "mongoose"
import { IJob } from "../../../interface/models/Job.interface"
import { jobSchema } from "../../../models/models/job.schema"
import { CustomRequest } from "../../../interface/common/request.interface"
import { StatusCodes } from "http-status-codes"

const jobRepository = mongoose.model<IJob>("Job", jobSchema);

export const create = async (req: CustomRequest<{}, {}, IJob, {}>, res: Response) => {
    req.body.createBy = req.user._id
    const result = await jobRepository.create({ ...req.body })
    new OK({
        message: "Oke",
        metadata: result
    }).send(res)
}


export const find = async (req: Request, res: Response) => {
    const { id, company, fields, limit = 10, page = 1, ...query } = req.query;
    const a = fields as string;
    const fieldsList = a?.split(",").join(" ");

    const skip = (+page - 1) * +limit;
    let result = [];
    try {
        if (id) {
            result = (await jobRepository
                .findOne({ _id: id, company: { $regex: company, $options: "i" }, ...query })
                .select(`${fieldsList}`)) as any;
        } else {
            result = await jobRepository
                .find({ ...query })
                .select(`${fieldsList}`)
                .limit(+limit)
                .skip(skip);
        }
        console.log("result:::", result);
        new OK({
            message: "Find Job Success",
            metadata: result,
        }).send(res);
    } catch (error) {
        new OK({
            message: "Find job  Failed",
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        }).send(res);
    }
}

export const update = async (req: CustomRequest<{ id: string }, {}, IJob, {}>, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id
    const { ...data } = req.body
    const items = await jobRepository.findByIdAndUpdate({ _id: id, createBy: userId }, { ...data }, { new: true })

    new OK({
        message: "Update Job success",
        metadata: items
    }).send(res)
}


export const deleted = async (req: CustomRequest<{ id: string }, {}, IJob, {}>, res: Response) => {
    const { id } = req.params;
    try {
        const result = await jobRepository.findOneAndDelete({ _id: id });

        if (!result) {
            new OK({
                message: "Job not found",
            }).send(res);
        }
        new OK({
            message: "Delete Job Success!!",
        }).send(res);
    } catch (error) {
        new OK({
            message: "Delete Fail!!",
            statusCode: StatusCodes.BAD_REQUEST
        }).send(res);
    }
}