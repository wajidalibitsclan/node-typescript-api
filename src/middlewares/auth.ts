import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/httpStatus";

const secretKey: string = "wajid123";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({ status: HttpStatusCodes.UNAUTHORIZED, message: 'Authorization header is missing' });
  }
  
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({ status: HttpStatusCodes.UNAUTHORIZED, message: 'Token is missing' });
  }

  const decoded = verify(token, secretKey);

  if (!decoded) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({ status: HttpStatusCodes.UNAUTHORIZED, message: 'Invalid or expired token' });
  }

  (req as any).user = decoded;

  next();
}

export default auth;