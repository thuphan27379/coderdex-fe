/*Workflow:
1.generating data
2.input receive: nhan du lieu dau vao
3.check input: kiem tra du lieu dau vao
4.process data: lam viec voi du lieu dau vao
5.save data: luu tru
*/
const fs = require("fs");
const csv = require("csvtojson"); //

const data = {
  data: [
    {
      id: 1,
      name: "bulbasaur",
      types: ["grass", "poison"],
      url: "./archive/images/images/abomasnow.png",
      description: [],
      height: [],
      weight: [],
      category: [],
      abilities: [],
      previousPokemon: [],
      nextPokemon: [],
    },
  ],
  totalPokemons: 721,
};

const createAlbum = async () => {
  let newData = await csv().fromFile("pokemon.csv");
  console.log(newData);

  newData = new Set(
    newData.map((e, index) => ({
      id: index + 1,
      name: e.Name,
      types: e.Type2
        ? [e.Type1.toLowerCase(), e.Type2.toLowerCase()]
        : [e.Type1.toLowerCase()],
      url: `./archive/images/images/${e.Name}.png`,
    }))
  );

  newData = Array.from(newData);

  // console.log(newData);

  //
  let data = JSON.parse(fs.readFileSync("db.json"));

  data = { data: newData, totalPokemons: newData.length };

  fs.writeFileSync("db.json", JSON.stringify(data));
  // JS obj to json string
  // console.log("done");
};

createAlbum();
