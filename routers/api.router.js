/* ----- REQUIRED IMPORTS ----- */

const router = require("express").Router()
const controller = require("../controllers/api.controller")

/* ---------- */


/* ----- ROUTES ----- */

router.get("/getAll", controller.getAll)
router.get("/:id", controller.getOne)


/* ---------- */


/* ----- MODULE EXPORT ----- */

module.exports = router

/* ---------- */