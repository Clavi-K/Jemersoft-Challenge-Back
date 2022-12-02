/* ----- ENV VARIABLES CONFIG ----- */

require("dotenv").config({ path: ".env" })

/* ---------- */

/* ----- REQUIRED IMPORTS ----- */

const express = require("express")
const routers = require("./routers")

/* ---------- */


/* ----- VARIABLES ----- */

const app = express()
const PORT = process.env.PORT || 8082

/* ---------- */


/* ----- MIDDLEWARES ----- */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ---------- */


/* ----- ROUTERS ----- */

app.use("/", routers)

/* ---------- */


/* ----- APP LISTENING ----- */

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

/* ---------- */