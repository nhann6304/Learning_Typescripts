import { EStatus } from "../../enums/status.enum";

export interface IJob {
    company: string,
    position: string,
    status: EStatus,
    createBy: any
}