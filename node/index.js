import express from "express";
import dotenv from 'dotenv'
import db from './db.js'
import userRouter from './routers/user.route.js'
import blogRouter from './routers/blog.route.js'
import authRouter from './routers/auth.route.js'
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config() 
app.use(cookieParser());
app.use(express.static('./uploads'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',userRouter)
app.use('/api',blogRouter)
app.use('/api',authRouter)

const port = process.env.port
app.listen(port, () => {
    console.log(`running port no ${port}`);
});
