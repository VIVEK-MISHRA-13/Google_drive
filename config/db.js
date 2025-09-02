const { configDotenv } = require('dotenv');
const mongoose = require('mongoose');
configDotenv();

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDb;