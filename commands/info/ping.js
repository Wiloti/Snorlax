module.exports = {
  name: "ping",
  category: "info",
  description: "Am i sleeping?",
  usage: "!ping",
  run: async ({ message }) => {
    message.reply("I'm not sleeping yet!");
    console.log("> !ping");
  },
};
