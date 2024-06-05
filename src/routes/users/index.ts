import { Router } from "express";
import userController from "../../controllers/userController";

// Create a new router instance
const userRouter = Router();

// Define routes using the router instance
userRouter.get("/", userController.index);
userRouter.post("/", userController.store);

// Export the router instance
export default userRouter;
