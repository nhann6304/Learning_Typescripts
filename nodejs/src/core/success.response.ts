import { Response } from "express";
import { Ires } from "../interface/common/response.interface";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


class SuccessApi implements Ires {
    message: string;
    metadata: any;
    option?: any;
    reasonStatusCode: string;
    statusCode: number;
    // Methoud
    send(res: Response, headers = {}) {
        return res.status(this.statusCode).json(this);
    }
    constructor({ message, statusCode, metadata, option, reasonStatusCode }: Ires) {
        this.message = message;
        this.metadata = metadata;
        this.statusCode = statusCode
        this.reasonStatusCode = reasonStatusCode
    }


}

export class OK extends SuccessApi {
    constructor({ message, statusCode = 200, metadata, option = {}, reasonStatusCode = ReasonPhrases.OK }: Ires) {
        super({ message, metadata, statusCode, option, reasonStatusCode })
    }
}


export class CREATE extends SuccessApi {
    constructor({ message, statusCode = StatusCodes.CREATED, metadata, option = {}, reasonStatusCode = ReasonPhrases.CREATED }: Ires) {
        super({ message, metadata, statusCode, option, reasonStatusCode })
    }
}
