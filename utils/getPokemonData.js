const axios = require("axios");
const { pokemonSearch } = require("./pokemonSearch");

// create a function which will return the data of the pokemon from the api and return it in a promise
const getPokemonData = async (lan, pokemonName, message) => {
  try {
    const id = pokemonSearch(pokemonName, message);
    if (!id) return;
    const url1 = `https://pokeapi.co/api/v2/pokemon/${id[0]}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id[0]}`;

    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);

    if (response2.data.color.name === "brown")
      response2.data.color.name = "dark_orange";
    else if (response2.data.color.name === "pink")
      response2.data.color.name = "luminous_vivid_pink";
    else if (response2.data.color.name === "gray")
      response2.data.color.name = "dark_gray";

    if (response2.data.generation.name === "generation-i")
      response2.data.generation.name = "Generation I";
    else if (response2.data.generation.name === "generation-ii")
      response2.data.generation.name = "Generation II";
    else if (response2.data.generation.name === "generation-iii")
      response2.data.generation.name = "Generation III";
    else if (response2.data.generation.name === "generation-iv")
      response2.data.generation.name = "Generation IV";
    else if (response2.data.generation.name === "generation-v")
      response2.data.generation.name = "Generation V";
    else if (response2.data.generation.name === "generation-vi")
      response2.data.generation.name = "Generation VI";
    else if (response2.data.generation.name === "generation-vii")
      response2.data.generation.name = "Generation VII";
    else response2.data.generation.name = "Generation VIII";

    Object.values(response2.data.genera).forEach((value) => {
      if (value.language.name === id[1] && lan === null) {
        response2.data.genera = value.genus;
      } else {
        if (value.language.name === lan) {
          response2.data.genera = value.genus;
        }
      }
    });

    Object.values(response2.data.flavor_text_entries).forEach((value) => {
      if (value.language.name === id[1] && lan === null) {
        response2.data.flavor_text_entries = value.flavor_text;
      } else {
        if (value.language.name === lan) {
          response2.data.flavor_text_entries = value.flavor_text;
        }
      }
    });
    Object.values(response1.data.stats).forEach((value) => {
      if (value.name === "hp") {
        response1.data.hp = value.base_stat;
      } else if (value.name === "attack") {
        response1.data.attack = value.base_stat;
      } else if (value.name === "defense") {
        response1.data.defense = value.base_stat;
      } else if (value.name === "special-attack") {
        response1.data.specialAttack = value.base_stat;
      } else if (value.name === "special-defense") {
        response1.data.specialDefense = value.base_stat;
      } else if (value.name === "speed") {
        response1.data.speed = value.base_stat;
      }
    });
    const types = response1.data.types.map((type) => type.type.name).join(", ");

    return [response1.data, response2.data, types];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPokemonData,
};
