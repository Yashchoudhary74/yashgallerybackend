import mongoose from 'mongoose'
import { Image } from '../models/image.model.js'


const getImageData = async (req, res) => {

   try {
     const response = await Image.find()
    res.json(response)
   } catch (error) {
    console.log("Image data not found")
   }
}

export { getImageData }