import mongoose from "mongoose";

const userSchema = new mongoose.Schmea({
    username:{type:String, required:true, unique:true},
    email:{type: String, required: true, unique:true}
});