import { sign, verify } from "jsonwebtoken";

export const SignJWT = <T extends object>(payload: T): string => {
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME })
    return token;
};


export const decodeJwt = (token: string) => {
    try {
        const result = verify(token, process.env.JWT_SECRET);
        return result
    } catch (error) {
        throw new error("Error", error)
    }

}