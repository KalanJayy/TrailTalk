import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const generateToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "15d"})
}

router.post("/register", async (req,res) => {
    try {
        const {email, username, password} = req.body;

        if (!username || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }

        if(password.length < 6){
            return res.status(400).json({message: "Password should be at least 6 characters long"})
        }

        if(username.length < 3){
            return res.status(400).json({message: "Username should be at least 3 characters long"})
        }

        // check if user already exists
        const existingUser = await User.findOne({$or:[{username}]});
        if (existingUser){
            return res.status(400).json({message: "Username already exists" })
        }

        const existingEmail = await User.findOne({$or:[{email}]});
        if (existingEmail){
            return res.status(400).json({message: "Email already exists" })
        }
        

        //get random avatar
        const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

        const user = new User({email, username, password, profileImage})
        
        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            token,
            user:{
                _id:user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
            },
        });

    } catch (error) {
        console.log("Error in register route", error);
        res.status(500).json({message: "Internal server error"})
    }
});

router.post("/login", async (req,res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password){
            return res.status(400).json({message: "All fieldds required"})
        }

        //check if user exist
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        //check if password is correct
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect){
            return res.status(400).json({message: "Invalid Credentials"})
        } 

        //generate token
        const token = generateToken(user._id);

        res.status(200).json({
            token,
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
            },
        }); 
    } catch (error) {
        console.log("Error in login route", error);
        res.status(500).json({message: "Internal Server Error"});       
    }
});



export default router;