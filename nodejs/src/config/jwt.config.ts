import { JwtPayload, sign, verify } from "jsonwebtoken";

export const SignJWT = <T extends object>(payload: T): string => {
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME })
    return token;
};


export const decodeJWT = <T extends JwtPayload>(token: string): T => {
    try {
        const result = verify(token, process.env.JWT_SECRET);
        return result as T
    } catch (error) {
        return error
    }
}



// import { sign, verify, JwtPayload } from "jsonwebtoken";

// export class JwtService<T extends object> implements JwtPayload {
//     private secret: string;
//     private expiresIn: string;

//     constructor(secret: string, expiresIn: string) {
//         if (!secret || !expiresIn) {
//             throw new Error("JWT secret and expiration time must be provided.");
//         }
//         this.secret = secret;
//         this.expiresIn = expiresIn;
//     }

//     // Sign a payload and generate a JWT
//     signToken(payload: T): string {
//         return sign(payload, this.secret, { expiresIn: this.expiresIn });
//     }

//     // Verify and decode a JWT
//     decodeToken<T extends JwtPayload>(token: string): T {
//         try {
//             const result = verify(token, this.secret) as T;
//             return result;
//         } catch (error: any) {
//             throw new Error(`Failed to decode token: ${error.message}`);
//         }
//     }
// }

// export default JwtService;
