import { Router } from "express";
const router = Router()
import {getAdminForm,postAdminForm} from '../controllers/admin.controller.js'

router.get('/admin',getAdminForm)
router.post('/admin',postAdminForm)


export {router as adminRoute}