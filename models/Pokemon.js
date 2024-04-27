const mongoose = require("mongoose");

//Create schema
const pokemonSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      required: true,
      maxLength: 2,
    },
    url: {
      type: String,
      required: true,
    },
    description: { type: String },
    height: { type: String },
    weight: { type: String },
    category: { type: String },
    abilities: { type: String },
  },
  {
    timestamps: true,
  }
);

//Create and export model
const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
