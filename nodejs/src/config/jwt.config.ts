import { sign } from "jsonwebtoken";

export const SignJWT = <T extends object>(payload: T): string => {
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME })
    return token;
};
