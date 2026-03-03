import { Router } from "express";
import { getImageData } from "../controllers/image.controller.js";

const router = Router()

router.route('/api/images').get(getImageData)

export {router as imageRoute}