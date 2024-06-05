import jwt from "jsonwebtoken";

interface Payload {
    username: string;
    email: string;
}

const secretKey: string = "wajid123";

export const token = (payload: Payload): string => {
    return jwt.sign(payload, secretKey);
}

export const verify = (token: string) : Payload | null => {
    try {
        return jwt.verify(token, secretKey) as Payload;
      } catch (err) {
        console.error('Token verification failed:', err);
        return null;
      }
}