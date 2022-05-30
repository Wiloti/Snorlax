const { getFiles } = require("../utils/files");
const fs = require("fs");
// go through all the files in the folder and get the name of the file.
module.exports = (bot, reload) => {
  const { client } = bot;

  fs.readdirSync("./commands/").forEach((dir) => {
    let commands = getFiles(`./commands/${dir}`, ".js");

    commands.forEach((command) => {
      if (reload)
        delete require.cache[require.resolve(`../commands/${dir}/${command}`)];
      const cmd = require(`../commands/${dir}/${command}`);
      client.commands.set(cmd.name, cmd);
    });
  });
  console.log(`Successfully loaded ${client.commands.size} commands`);
};
