import mongoose from 'mongoose'
import { Image } from '../models/image.model.js'


const getImageData = async (req, res) => {

   try {
      const response = await Image.find()
      if (!response) {
         return res.status(404).json({
            message: "Data not found"
         })
      }
      res.json(response)
   } catch (error) {
     
      return res.status(500).json({
         message: "Server Error",
         error: error.message
      })
   }
}

export { getImageData }