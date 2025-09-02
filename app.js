const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const connectToDB = require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const indexRouter = require('./routes/index.routes');


app.set('view engine','ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

// /user/test
app.use('/',indexRouter);
app.use('/user',userRouter);


app.listen(3000,()=>{
    console.log("Server is running on port no 3000");
    
})