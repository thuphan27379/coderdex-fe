var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index");
});

// http://localhost:5000/pokemons

const pokemonApi = require("./pokemon.api.js");
router.use("/pokemons", pokemonApi);

/*Endpoint APIs:*/

// @route GET/pokemons
// @description - get all pokemons
// @body (id, name, types, url)
// router.get("/pokemons");

// @route GET/pokemons?type="grass"
// @description - search all pokemons with type = grass
// @body (types)
// router.get('/pokemons?type=""');

// @route GET/pokemons?name="bulbasaur"
// @description - search all pokemons by name
// @body (name)
// router.get('/pokemons?name=""');

// @route GET/pokemons/:id
// & return together with the previous and next pokemon
// @description - get details of a single pokemon (currentId), previousPokemon: currentId - 1, nextPokemon: currentId + 1
// @body (id, name, types, url, description, ...)
// router.get("/pokemons/:id");

// @route POST/pokemons/:id
// @description - create a new pokemon
// @body (id, name, types, url, description, ...)
// router.post("/pokemons/:id");

// :rocket:
// @route PUT/pokemons/:id
// @description - update a pokemon
// @body (id, name, types, url)
// router.put("/pokemons/:id");

// @route DELETE/pokemons/:id
// @description - delete a pokemon
// @body (id)
// router.delete("/pokemons/:id");

module.exports = router;
