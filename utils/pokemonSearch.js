const pokedex = require("pokemon");

const languages = ["de", "fr", "en", "ja"];

const pokemonSearch = (pokemonName, message) => {
  const pokemon =
    pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase();
  let lang = null;

  languages.forEach((language) => {
    const pokedexLangue = pokedex.all(language);
    const isInLang = pokedexLangue.find(
      (a) => a.toLowerCase() === pokemon.toLowerCase()
    );
    if (isInLang) {
      lang = language;
    }
  });

  if (!lang) {
    message.reply("This pokemon doesn't exist, please check your spelling");
    return;
  }

  const id = pokedex.getId(pokemon, lang);
  return [id, lang];
};

module.exports = {
  pokemonSearch,
};
