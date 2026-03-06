import dotenv from 'dotenv'

dotenv.config();
import express from 'express'
import { connectDB } from './db/db.js'
import { imageRoute } from './routes/image.route.js';
import { adminRoute } from './routes/admin.route.js';
const app = express()
import cors from 'cors'
import { errorHandler } from './middleware/errorHandler.middleware.js';



app.use(cors({
    origin: true,
    credentials: true
}))
app.use(errorHandler)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 1101
const DB_URL = process.env.DB_URL

app.use('/', imageRoute)
app.use('/', adminRoute)
app.set('view engine', 'ejs')
app.set("views", 'src/views');


// server start
connectDB(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`)
    })
}).catch((err) => {
    console.log(err.message)
})
