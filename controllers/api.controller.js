/* ----- REQUIRED IMPORTS ----- */

const service = require("../services/api.service")

/* ---------- */

/* ----- MODULE EXPORT ----- */

module.exports = {

    getTen: async (req, res) => {
        const { maxIndex } = req.params

        try {

            const result = await service.getTen(maxIndex)
            return res.status(200).send(result)

        } catch (e) {
            console.log(e)
            return res.status(500).send("Error: Could not return all pokemons")
        }

    },

    getOne: async (req, res) => {

        try {
            const { id } = req.params
            const result = await service.getOne(id)

            return res.status(200).send(result)

        } catch (e) {
            console.log(e)
            return res.status(500).send("Error: Could not find that pokemon")
        }

    }

}

/* ---------- */