/* ----- ENV VARIABLES CONFIG ----- */

require("dotenv").config({ path: ".env" })

/* ---------- */

/* ----- REQUIRED IMPORTS ----- */

const express = require("express")
const routers = require("./routers")
const cors = require("cors")

/* ---------- */


/* ----- VARIABLES ----- */

const app = express()
const PORT = process.env.PORT || 8082

/* ---------- */


/* ----- MIDDLEWARES ----- */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
        methods: "GET"
    })
)

/* ---------- */


/* ----- ROUTERS ----- */

app.use("/", routers)

/* ---------- */


/* ----- APP LISTENING ----- */

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

/* ---------- */