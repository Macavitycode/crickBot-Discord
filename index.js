const Discord = require("discord.js");
const config = require("./config.json");
console.log(config.token);

const bot = new Discord.Client();

bot.once("ready", () => {
  console.log("This bot is onloine");
});

bot.login(config.token);
