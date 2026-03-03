import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({


    imageSrc: {
        type: String,
        trim: true,
        unique: true,
        default: "placeholder.jpg"
    },
    ghibliSrc: {
        type: String,
        trim: true,
        unique: true,
        default: "placeholder.jpg"
    },
    location: {
        type: String,
        trim: true,
        default: "null",
        lowercase: true,
        
    }



}, { timestamps: true })


const Image = mongoose.model('Image', imageSchema)

export { Image }