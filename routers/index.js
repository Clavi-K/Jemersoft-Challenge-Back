/* ----- REQUIRED IMPORTS  ----- */

const router = require("express").Router()

const apiRouter = require("./api.router")

/* ---------- */


/* ----- ROUTERS ----- */

router.use("/pokemons", apiRouter)

/* ---------- */

/* ----- UNDEFINED ROUTES ENDWARE ----- */

router.use("*/*", (req, res) => {

    try {
        return res.status(404).send("Oops! This endpoint does not exists!")
    } catch(e) {
        next(e)
    }

})

/* ---------- */

/* ----- MODULE EXPORT ----- */

module.exports = router

/* ---------- */