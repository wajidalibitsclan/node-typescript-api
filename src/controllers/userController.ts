import User from "../database/models/users";
import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/httpStatus";

class UserController {
 public async index(req:Request, res:Response) : Promise <Response>{
    try{
        const user = await User.find();
        return res.status(HttpStatusCodes.OK).json({
            status: HttpStatusCodes.OK,
            data: user
        })
    }catch(error){
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error."
        });
    }
 } 
 public async show(req:Request, res:Response): Promise <Response>{
    try{

        return res.status(HttpStatusCodes.OK).json({
            status: HttpStatusCodes.OK
        })
    }catch(error){
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error."
        });
    }
 }  
 public async store(req:Request, res:Response): Promise <Response>{
    try{
        return res.status(HttpStatusCodes.OK).json({
            status: HttpStatusCodes.OK
        })
    }catch(error){
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error."
        });
    }
 }  
 public async update(req:Request, res:Response): Promise <Response>{
    try{
        return res.status(HttpStatusCodes.OK).json({
            status: HttpStatusCodes.OK
        })
    }catch(error){
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error."
        });
    }
 }  
 public async destroy(req:Request, res:Response): Promise <Response>{
    try{
        return res.status(HttpStatusCodes.OK).json({
            status: HttpStatusCodes.OK
        })
    }catch(error){
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error."
        });
    }
 }  
}

const userController = new UserController();

export default userController;