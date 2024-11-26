import *  as bcrypt from "bcryptjs"
const salt = 10


export const hashPassword = async (pass_hien_tai: string) => {
    const passwordHash = await bcrypt.hash(pass_hien_tai, salt);
    return passwordHash
}

export const comparePassword = async (pass_ma_hoa: string, pass_hien_tai): Promise<boolean> => {
    const isMatch = await bcrypt.compare(pass_hien_tai, pass_ma_hoa);
    return isMatch
}