const express = require('express');
const axios = require('axios');
const getRandomPokemon = require('../helpers/getRandomPokemon');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/pokemon", async (req, res) => {
    try {
        const pokemon = await getRandomPokemon(); 
        res.render("pokemon", { pokemonList: pokemon }); 
    } catch (err) {
        console.error("Error fetching Pokémon:", err.message); 
        res.status(500).send("Failed to load Pokémon.");
    }
});

router.get("/pokemon/random", async (req, res) => {
    try {
        const pokemon = await getRandomPokemon();
        res.render("random_pokemon", { pokemonList: pokemon });
    } catch (err) {
        res.status(500).send("Could not fetch random Pokémon.");
    }
});

router.get("/teams", (req, res) => {
    res.render("teams");
});

module.exports = router;