import mongoose from "mongoose";
import { Image } from "../models/image.model.js";
const postAdminForm = async (req, res) => {

    const { imageSrc, ghibliSrc, location } = req.body;

    const isAlreadyExist = await Image.findOne({ imageSrc })
    if (isAlreadyExist) {
        console.log('Data already exist')
        return res.redirect('/admin')
    }

    const imageInserted = await Image.create({
        imageSrc,
        ghibliSrc,
        location
    }
    )

    if (imageInserted) {
        res.status(201).send("Data Posted")

    } else {
        res.status(500)
        res.redirect('/admin')
    }
}
const getAdminForm = (req, res) => {
    res.render('admin')
}

export { getAdminForm, postAdminForm }
