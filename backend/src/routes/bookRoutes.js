import express from "express"
import cloudinary from "../lib/cloudinary.js";
import Book from "../models/Book.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

//create a book
router.post("/", protectRoute, async (req, res)=> {
    try {
        const {title, caption, rating, image} = req.body;

        if(!image || !title || !caption || !rating){
            return res.status(400).json({message: "Please provide all fields"})
        }

        //upload the image to cloudinary
        const uploadResponse = await cloudinary.uploader.upload(image);
        const imageURL = uploadResponse.secure_url

        //save to the databsse
        const newBook = new Book ({
            title,
            caption,
            rating,
            image: imageURL,
            user: req.user._id
        })
        await newBook.save()
        res.status(201).json(newBook)

    } catch (error) {
        console.log("Error creating book, error");
        res.status(500).json({message:error.message});
    }
})

//pagination => infinite loading
router.get("/", protectRoute, async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;
        const skip = (page - 1) * limit; 

        const books = await Book.find().sort({createdAt: -1}).skip(skip).limit(limit).populate("user", "username profileImage");
        
        const totalBooks = await Book.countDocuments();

        res.send({
            books,
            currentPage: page,
            totalBooks: totalBooks,
            totalPages: Math.ceil(totalBooks/limit),
        });
        
    } catch (error) {
        console.log("Erro in get all books", error)
        res.status(401).json({message: "Internal server error"});
    }
})

export default router;