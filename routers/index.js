/* ----- REQUIRED IMPORTS  ----- */

const router = require("express").Router()

const apiRouter = require("./api.router")

/* ---------- */


/* ----- ROUTERS ----- */

router.use("/pokemons", apiRouter)

/* ---------- */


/* ----- MODULE EXPORT ----- */

module.exports = router

/* ---------- */