const express = require("express");
const router = express.Router();

const crypto = require("crypto");
const fs = require("fs");

// @route GET/pokemons
// @description - get all pokemons
// @body (id, name, types, url)

// @route GET/pokemons?types="grass"
// @description - search all pokemons with type = grass
// @body (types)

// @route GET/pokemons?name="bulbasaur"
// @description - search all pokemons by name
// @body (name)

router.get("/", (req, res, next) => {
  //input validation:
  const allowedFilter = ["id", "name", "types", "url"];
  // const param = req.query.types; // get by type
  // console.log(param);

  try {
    let { page, limit, name, types } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    console.log(name);

    //processing logic:
    //Number of items skip for selection
    let offset = limit * (page - 1);
    //Read data from db.json then parse to JSobject
    let db = fs.readFileSync("db.json", "utf-8");
    db = JSON.parse(db);
    // console.log(db);
    const { data } = db;
    //Filter data by title
    let result = [];

    if (name) {
      result = data.filter((pokemon) => pokemon.name === name);
      console.log(result);
    }

    if (types) {
      result = data.filter((pokemon) => pokemon.types.includes(types));
      console.log(types);
    }

    //then select number of result by offset
    result = result.slice(offset, offset + limit);

    //send response:
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

// @route GET/pokemons/:id
// & return together with the previous and next pokemon
// @description - get details of a pokemon (currentId), previousPokemon: currentId - 1, nextPokemon: currentId + 1
// @body (id, description, ...)
router.get("/:id", (req, res, next) => {
  //input validation:
  let pokemonId = req.params.id;
  let previousPokemon = pokemonId - 1;
  let nextPokemon = pokemonId + 1;

  try {
    //processing logic:
    //Number of items skip for selection
    let offset = limit * (page - 1);
    //Read data from db.json then parse to JSobject
    let db = fs.readFileSync("db.json", "utf-8");
    db = JSON.parse(db);
    // console.log(db);
    const { data } = db;
    //Filter data by title
    let result = [];

    console.log(req.params);
    // console.log(pokemonId, "id:");

    if (pokemonId) {
      result = data.filter((pokemon) => pokemon.id === pokemonId);
      console.log(pokemonId);
    }

    //send response:
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

// @route POST/pokemons
// @description - create a new pokemon
// @body (id, name, types, url, description, ...)

router.post("/", (req, res, next) => {
  //post input validation:
  try {
    const { id, name, types, url } = req.body;
    if (!id || !name || !types || !url) {
      const exception = new Error(`Missing info`);
      exception.statusCode = 401;
      throw exception;
    }
  } catch (error) {
    next(error);
  }
  //post processing logic:
  const newPokemon = {
    id,
    name,
    types,
    url,
  };
  //Read data from db.json then parse to JSobject
  let db = fs.readFileSync("db.json", "utf-8");
  db = JSON.parse(db);
  const { pokemon } = db;
  //Add new pokemon JS object
  pokemon.push(newPokemon);
  //Add new pokemon to db JS object
  db.pokemon = pokemon;
  //db JSobject to JSON string
  db = JSON.stringify(db);
  //write and save to db.json
  fs.writeFileSync("db.json", db);

  //post send response:
  res.status(200).send();
});

// :rocket:
// @route PUT/pokemons/:id
// @description - update a pokemon
// @body (id, name, types, url)

// @route DELETE/pokemons/:id
// @description - delete a pokemon
// @body (id)

//
module.exports = router;
