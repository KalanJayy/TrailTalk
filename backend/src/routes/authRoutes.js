import express from "express";
import User from "../models/User.js";

const router = express.Router();

const generateToken = (userID) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "15d"})
}

router.post("/register", async (req,res) => {
    try {
        const {email, username, password} = req.body;

        if (!username || email || password){
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
    res.send("login");
});



export default router;