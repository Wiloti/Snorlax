const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "usage",
  category: "info",
  description: "Snorlax's info and usage",
  usage: "!usage",
  run: async ({ client, message }) => {
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("Snorlax's info and usage")
          .setThumbnail(client.user.displayAvatarURL())
          .setColor("DARK_NAVY")
          .setDescription(
            "I'm here to provide you with information about pokemons.\n\n"
          )
          .addFields(
            { name: "# Usage :", value: "----------------" },
            { name: "!ping", value: "Returns the bot's ping" },
            { name: "!usage\n\n", value: "Shows Snorlax's info and usage" },
            {
              name: "!pokemon ```PokemonName```\n\n",
              value:
                "Will give you informations about the pokemon you provide. (Supported languages : de, en, fr, ja)\n\n__TAKE NOTE:__ if the pokemon appear with the same name in different languages, it will return in english by default you can add your language in option of the command.\n\n",
            },
            { name: "\u200B", value: "----------------" }
          )
          .setFooter({
            text: "Snorlax",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTimestamp(),
      ],
    });
    console.log("> !usage");
  },
};
