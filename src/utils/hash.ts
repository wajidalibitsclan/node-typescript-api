import bcrypt from "bcrypt";

const saltRounds : number = 10;

export const make = async (password: string) : Promise <string> => {
    const pwd = await bcrypt.hash(password, saltRounds);
    return pwd;
}

export const verify = async (password: string, hashPassword: string) : Promise <boolean> => {
    const pwd = await bcrypt.compare(password, hashPassword);
    return pwd;
}