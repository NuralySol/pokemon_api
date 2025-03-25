// this is a helper function to get 10 random pokemon from an API call:
const axios = require('axios');

const getRandomPokemon = async () => {
    // set the limit of the max number of pokemon API:
    const maxPokemon = 1010;
    const ids = new Set();

    // Ensure that only 10 unique IDs:
    while (ids.size < 10) {
        const randomId = Math.floor(Math.random() * maxPokemon) + 1;
        ids.add(randomId); // add it to the set to make sure the ids are unique:
    }
    const requests = [...ids].map(id =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    );

    try {
        const responses = await Promise.all(requests);
        const pokemonList = responses.map(res => res.data);
        return pokemonList;
    } catch (err) {
        console.error("Error fetching random Pokémon:", err.message);
        throw new Error("Failed to fetch random Pokémon");
    }
}

// export this helper function:
module.exports = getRandomPokemon;