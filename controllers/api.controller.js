/* ----- REQUIRED IMPORTS ----- */

const service = require("../services/api.service")

/* ---------- */

/* ----- MODULE EXPORT ----- */

module.exports = {

    getAll: async (req, res) => {

        try {

            const result = await service.getAll()
            return res.status(200).send(result)

        } catch (e) {
            console.log(e)
            return res.status(500).send("Error: Could not return all pokemons")
        }

    }

}

/* ---------- */