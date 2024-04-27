const crypto = require("crypto");

// @route GET  /pokemons
// @description - get all pokemons
// @body (id, name, types, url)

// dang lam //////
const pokemonController = {};

pokemonController.getPokemons = catchAsync(async (req, res, next) => {
  //// get data from requests - nhan yeu cau
  const currentId = req.id;
  const { id, name, types, url } = req.body;

  //// business logic validation - kiem chung database

  //// process -xu ly

  //// response result, success or not
  return sendResponse(
    res,
    200,
    true,
    post,
    null,
    "create new post successfully"
  );
});

// @route GET  /pokemons?type=grass
// @description - search all pokemons with type = grass
// @body (types)

// @route GET  /pokemons?name=bulbasaur
// @description - search all pokemons by name
// @body (name)

// @route GET  /pokemons/:id
// & return together with the previous and next pokemon
// @description - get details of a pokemon (currentId), previousPokemon: currentId - 1, nextPokemon: currentId + 1
// @body (id, name, types, url, description, ...)

// @route POST  /pokemons/:id
// @description - create a new pokemon
// @body (id, name, types, url, description, ...)

// :rocket:
// @route PUT  /pokemons/:id
// @description - update a pokemon
// @body (id, name, types, url)

// @route DELETE  /pokemons/:id
// @description - delete a pokemon
// @body (id)
