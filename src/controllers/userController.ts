import User from "../database/models/users";
import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/httpStatus";
import { make } from "../utils/hash";

class UserController {

 //All Users
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

 //Show Single User
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

 //Store User
 public async store(req:Request, res:Response): Promise <Response>{
    try{
        const {username, email, password} = req.body;

        if(!username || !email || !password){
            return res.status(HttpStatusCodes.BAD_REQUEST)
            .json({
                status: HttpStatusCodes.BAD_REQUEST,
                message: "username, email and password required",
            });
        }
        
        const hashedPassword = await make(password);
        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });

        return res.status(HttpStatusCodes.CREATED).json({
            status: HttpStatusCodes.CREATED,
            data: user
        });

    }catch(error){
        console.log(error);
        
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            status: HttpStatusCodes.INTERNAL_SERVER_ERROR, 
            message: "Internal Server Error"
        });

    }
 }  

 //Update User
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

 //Destroy User
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