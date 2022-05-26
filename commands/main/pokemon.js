const { getPokemonData } = require("../../utils/getPokemonData");
const paginationEmbed = require("discordjs-button-pagination");
const { MessageEmbed, MessageButton } = require("discord.js");

module.exports = {
  name: "pokemon",
  category: "main",
  description:
    "Provide you general informations about the pokemon you put in the command",
  usage: "!pokemon <language> <pokemonName>",
  options: [
    {
      name: "language",
      description: "The language of the pokemonName",
      required: false,
    },
    {
      name: "pokemonName",
      description: "The name of the pokemon you want to get informations about",
      required: true,
    },
  ],
  run: async ({ client, message, args }) => {
    try {
      if (!args[0]) {
        message.reply("Please provide a Pokemon name");
        return;
      } else if (args[0] === "fr" || args[0] === "de") {
        const pokemon = await getPokemonData(args[0], args[1], message);
        const embed1 = new MessageEmbed()
          .setTitle(
            "#" +
              pokemon[0].id +
              "  " +
              args[1].toUpperCase() +
              " -  ⌜ " +
              pokemon[1].names[9].name +
              " ⌟"
          )
          .setColor(pokemon[1].color.name.toUpperCase())
          .setThumbnail(pokemon[0].sprites.front_default)
          .setImage(pokemon[0].sprites.other["official-artwork"].front_default)
          .addFields(
            {
              name: "# **Generation** :",
              value: pokemon[1].generation.name,
              inline: true,
            },
            {
              name: "\u200b",
              value: "\u200b",
            },
            {
              name: "# **Description** :",
              value: pokemon[1].flavor_text_entries,
              inline: false,
            },
            {
              name: "\u200b",
              value: "\u200b",
            }
          );
        const embed2 = new MessageEmbed()
          .setTitle(
            "# **Stats and shiny form**" +
              " ⌜ " +
              pokemon[1].names[9].name +
              " ⌟"
          )
          .setColor(pokemon[1].color.name.toUpperCase())
          .setThumbnail(pokemon[0].sprites.front_default)
          .setImage(pokemon[0].sprites.front_shiny)
          .setDescription(
            "\u200b" + "# ** Types :**  " + pokemon[2] + "\n\u200b"
          )
          .addFields(
            {
              name: "# ** HP ** ",
              value: `${pokemon[0].stats[0].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Attack ** ",
              value: `${pokemon[0].stats[1].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Defense ** ",
              value: `${pokemon[0].stats[2].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Sp. Attack ** ",
              value: `${pokemon[0].stats[3].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Sp. Defense ** ",
              value: `${pokemon[0].stats[4].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Speed ** ",
              value: `${pokemon[0].stats[5].base_stat}`,
              inline: true,
            }
          );
        const button1 = new MessageButton()
          .setCustomId("previousbtn")
          .setLabel("Previous")
          .setStyle("DANGER");

        const button2 = new MessageButton()
          .setCustomId("nextbtn")
          .setLabel("Next")
          .setStyle("SUCCESS");

        pages = [embed1, embed2];

        buttonList = [button1, button2];
        const timeout = 5000000;
        paginationEmbed(message, pages, buttonList, timeout);
      } else {
        const pokemon = await getPokemonData(null, args[0], message);
        const embed1 = new MessageEmbed()
          .setTitle(
            "#" +
              pokemon[0].id +
              "  " +
              args[0].toUpperCase() +
              " -  ⌜ " +
              pokemon[1].names[9].name +
              " ⌟"
          )
          .setColor(pokemon[1].color.name.toUpperCase())
          .setThumbnail(pokemon[0].sprites.front_default)
          .setImage(pokemon[0].sprites.other["official-artwork"].front_default)
          .addFields(
            {
              name: "# **Generation** :",
              value: pokemon[1].generation.name,
              inline: true,
            },
            {
              name: "\u200b",
              value: "\u200b",
            },
            {
              name: "# **Description** :",
              value: pokemon[1].flavor_text_entries,
              inline: false,
            },
            {
              name: "\u200b",
              value: "\u200b",
            }
          );
        const embed2 = new MessageEmbed()
          .setTitle(
            "# **Stats and shiny form**" +
              " ⌜ " +
              pokemon[1].names[9].name +
              " ⌟"
          )
          .setColor(pokemon[1].color.name.toUpperCase())
          .setThumbnail(pokemon[0].sprites.front_default)
          .setImage(pokemon[0].sprites.front_shiny)
          .setDescription(
            "\u200b" + "# ** Types :**  " + pokemon[2] + "\n\u200b"
          )
          .addFields(
            {
              name: "# ** HP ** ",
              value: `${pokemon[0].stats[0].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Attack ** ",
              value: `${pokemon[0].stats[1].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Defense ** ",
              value: `${pokemon[0].stats[2].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Sp. Attack ** ",
              value: `${pokemon[0].stats[3].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Sp. Defense ** ",
              value: `${pokemon[0].stats[4].base_stat}`,
              inline: true,
            },
            {
              name: "# ** Speed ** ",
              value: `${pokemon[0].stats[5].base_stat}`,
              inline: true,
            }
          );
        const button1 = new MessageButton()
          .setCustomId("previousbtn")
          .setLabel("Previous")
          .setStyle("DANGER");

        const button2 = new MessageButton()
          .setCustomId("nextbtn")
          .setLabel("Next")
          .setStyle("SUCCESS");

        pages = [embed1, embed2];

        buttonList = [button1, button2];
        const timeout = 5000000;
        paginationEmbed(message, pages, buttonList, timeout);
      }
    } catch (e) {
      console.log(e);
      return;
    }
  },
};
