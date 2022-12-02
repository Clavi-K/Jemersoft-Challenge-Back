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
            return pokemons.map(p => pokemonFilter(p, false))


        } catch (e) {
            console.log(e)
            throw new Error("Could not return all pokemons")
        }

    },

    getOne: async (id) => {


        try {

            const { data } = await axios.get(`${config.api.APIURL}/pokemon/${id}`)

            const pokemon = pokemonFilter(data, true)
            pokemon.description = await getDescription(id)

            return pokemon

        } catch (e) {
            console.log(e)
            throw new Error("Could not return one specific pokemon")
        }


    }

}

/* ---------- */

/* ----- LOCAL FUNCTIONS ----- */

async function requestHandler(url) {

    const request = await axios.get(url)
    return request.data

}

function pokemonFilter(pokemon, isDetailed) {

    const filteredPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        abilities: pokemon.abilities.map(a => a.ability.name),
        types: pokemon.types.map(t => t.type.name),
        weight: pokemon.weight
    }

    if (isDetailed) {
        filteredPokemon.moves = pokemon.moves.map(m => m.move.name)
    }

    return filteredPokemon

}

async function getDescription(id) {
    let result = ""
    const descriptionReq = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

    for (const flavor of descriptionReq.data.flavor_text_entries) {

        if (flavor.language.name === "es" && result == "" && flavor.version.name == "omega-ruby") {
            result = flavor.flavor_text
        }

    }

    return result.replace(/\n/g, " ")

}

/* ---------- */