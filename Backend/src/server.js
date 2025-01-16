import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000

connectDB()
.then(() => {
    app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error
    })

    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`)
    })
})
.catch((err) => {
    console.log("DB connection error: ", err);
})