import express from "express";
import http from "http";
// import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoDBConnect from "./database/db";
import router from "./routes";
dotenv.config();

mongoDBConnect();

const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(router);

const PORT : string = process.env.PORT || '3000';
const URL : string = process.env.URL || "http://localhost";

const server = http.createServer(app);

server.listen(8000, ()=> {
    console.log(`Server is running on ${URL}:${PORT}`); 
});


