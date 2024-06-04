import { Schema, model } from "mongoose";

const userSchema = new Schema <UserInerface> ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

interface UserInerface {
    username: string;
    email: string;
    password: string
}

const User = model<UserInerface> ("User", userSchema);

export default User;