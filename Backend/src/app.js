import express from 'express'
import cors from 'cors'
import cookiesParser from 'cookie-parser'

const app = express()

// console.log(process.env.CORS_ORIGIN)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({ limit: "20kb" }))
// app.use(express.json())

app.use(express.urlencoded({ extended: true ,limit: "20kb" }))
// app.use(express.urlencoded())

app.use(express.static("public"))

app.use(cookiesParser())


// import routes
// import userRoutes from './routes/user.routes.js'
import promptRoutes from './routes/prompt.routes.js'


// routes declarations
app.use("/api/ai-res", promptRoutes)


export { app }