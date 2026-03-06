import mongoose from "mongoose";
import { Image } from "../models/image.model.js";
import { uploadOnCloudinary } from "../util/cloudinary.util.js";

import fs from 'fs'
const getDashboard = async (req, res) => {
    res.render('dashboard')
}
const postAdminForm = async (req, res) => {

    try {

        const { location } = req.body;

        const { originalImage, artImage } = req.files;

        const path1 = originalImage[0].path;
        const path2 = artImage[0].path;

        // upload on cloudanirry

        const uploadOriginal = await uploadOnCloudinary('personal/photogallery/original', path1);
        const uploadArt = await uploadOnCloudinary('personal/photogallery/art', path2);
        if (uploadOriginal && uploadArt) {
            fs.unlinkSync(path1);
            fs.unlinkSync(path2);
        }

        const dataInserted = await Image.create({

            originalImageSrc: uploadOriginal,
            artImageSrc: uploadArt,
            location
        });

        if(!dataInserted){
           return res.redirect('/dashboard/admin')
        }




        // return res.status(200).json({
        //     message: "Data posted",
        //     data: [dataInserted, uploadOriginal, uploadArt]
        // });

      return res.redirect('/dashboard')

    } catch (error) {

        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }


}


const getAdminForm = (req, res) => {

    res.render('admin', { errorMessage: "" })
}

export { getAdminForm, postAdminForm, getDashboard }
