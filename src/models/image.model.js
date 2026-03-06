import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({

    originalImageSrc: {
        type: String,
        required: true,
        trim: true,
        default: "placeholder.jpg"
    },
    artImageSrc: {
        type: String,
        trim: true,
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