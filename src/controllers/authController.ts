import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/httpStatus";
import User from "../database/models/users";
import {validate, validator, isValidated } from "../utils/validation";


class AuthController {
    public async login(req:Request, res:Response): Promise <Response>{
        try{
            const validationErrors = validator(req.body, {
                email: "required|isEmail",
                password: "required"
            });
            

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

     public async register(req:Request, res:Response): Promise <Response>{
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

const authController = new AuthController();

export default authController;