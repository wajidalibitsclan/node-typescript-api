import mongoose from "mongoose";
import configs from "../configs";

const mongoDBConnect = () => {
    mongoose.Promise = Promise;
    mongoose.connect(configs.mongodb_url);
    mongoose.connection.on('error', (error: Error) => console.log(error));
}

export default mongoDBConnect;

