const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const connectToDB = require('./config/db')
connectToDB();
const dotenv = require('dotenv');
dotenv.config();


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// /user/test
app.use('/user',userRouter);


app.listen(3000,()=>{
    console.log("Server is running on port no 3000");
    
})