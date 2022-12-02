/* ----- REQUIRED IMPORTS ----- */

const router = require("express").Router()
const controller = require("../controllers/api.controller")

/* ---------- */


/* ----- ROUTES ----- */

router.get("/getAll", controller.getAll)


/* ---------- */


/* ----- MODULE EXPORT ----- */

module.exports = router

/* ---------- */