import mongoose from "mongoose";
export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected")
    }catch(error){
        console.log("Error connecting to the database",error.message);
    }
}