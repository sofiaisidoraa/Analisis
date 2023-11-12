const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://sofiarios:sofia123@cluster0.a13smcv.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("BD conectada", conn.connection.host)
    } catch (error){
        console.log(error);

    } 
};

module.exports = db;