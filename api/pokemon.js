const express = require('express');
const axios = require('axios');
const router = express.Router();
const getRandomPokemon = require('../helpers/getRandomPokemon');

//! API routes REST: 
router.get("/", async (req, res) => {
    try {
        const pokemon = await getRandomPokemon(); 
        res.status(200).json(pokemon);
    } catch (err) {
        console.error("Error fetching random Pokémons:", err.message);
        res.status(500).json({ error: "Failed to fetch random Pokémons" });
    }
})

// GET /api/pokemon/:id or name
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        res.json(response.data);
    } catch (err) {
        res.status(404).json({ error: `Pokémon "${id}" not found.` });
    }
});

module.exports = router;