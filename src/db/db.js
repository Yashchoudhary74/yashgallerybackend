import mongoose from "mongoose";
const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(url)
        if (!conn) {
            console.log("Database not connected!")
        }
        console.log('Connected')
    } catch (error) {
        console.log('Connection failed.' + error.message)
    }
}

export {connectDB}