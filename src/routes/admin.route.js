import { Router } from "express";
const router = Router()
import { getAdminForm, postAdminForm,getDashboard } from '../controllers/admin.controller.js'
import { upload } from "../middleware/multer.middleware.js";
import { errorHandler } from "../middleware/errorHandler.middleware.js";

router.get('/dashboard', getDashboard)
router.get('/dashboard/admin', getAdminForm)
router.post('/dashboard/admin', upload.fields([{ name: 'originalImage', maxCount: 1 },{ name: 'artImage', maxCount: 1 }
]), postAdminForm)


export { router as adminRoute }