import *  as bcrypt from "bcryptjs"
const salt = 10


export const hashPassword = async (pass_hien_tai: string) => {
    const passwordHash = await bcrypt.hash(pass_hien_tai, salt);
    return passwordHash
}

