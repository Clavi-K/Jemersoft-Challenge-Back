/* ----- REQUIRED IMPORTS ----- */

const axios = require("axios")
const config = require("../config")

/* ---------- */


/* ----- MODULE EXPORT ----- */

module.exports = {

    getAll: async () => {

        try {

            const { data } = await axios.get(`${config.api.APIURL}/pokemon?limit=50`)
            const promises = data.results.map(p => requestHandler(p.url))

            const pokemons = await Promise.all(promises)
            return pokemons.map(p => pokemonFilter(p))


        } catch (e) {
            throw new Error("Could not return all pokemons")
        }

    }

}

/* ---------- */

/* ----- LOCAL FUNCTIONS ----- */

async function requestHandler(url) {

    const request = await axios.get(url)
    return request.data

}

function pokemonFilter(pokemon) {

    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        abilities: pokemon.abilities.map(a => a.ability.name),
        types: pokemon.types.map(t => t.type.name),
        weight: pokemon.weight
    }

}

/* ---------- */