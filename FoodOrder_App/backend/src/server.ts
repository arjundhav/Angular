import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"

import { Sample_Food,sample_tags, sample_users  } from "./data";
import foodRouter from './router/food.router'
import userRouter from "./router/user.router";
import { dbConnect } from './configs/database.config';

dbConnect()

const app = express();

app.use(express.json())
//localhost:4200;
//localhost:5000
app.use(cors())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200/"]
}));

app.use("/api/foods",foodRouter)

app.use("/api/users",userRouter)

app.get("/api/foods", (req, res) => {
    res.send(Sample_Food)
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = Sample_Food.filter(food => food.name.toLowerCase()
        .includes(searchTerm.toLowerCase()));
    res.send(foods)
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags)
});

app.get("/api/foods/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = Sample_Food.filter(food => food.tags?.includes(tagName));
    res.send(foods)
});

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = Sample_Food.find(food => food.id == foodId);
    res.send(food)
})
app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password)

    if(user){
        res.send(generateTokenResponse(user))
    }else{
        res.status(400).send("user name or password is not valid!")
    }

    })
    const generateTokenResponse=(user:any)=>{
    const token =jwt.sign({
        email:user.email,isAdmin:user.isAdmin
    },"SomeRandomText",{
        expiresIn:"30d"
    })
    user.token=token
    return user
}

app.listen(5000,()=>{
    console.log("Backend server is running https://localhost:5000/api/")
});
