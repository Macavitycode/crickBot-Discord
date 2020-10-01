const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const comFile = fs.readdirSync("./commands/").filter((f) => f.endsWith(".js"));

for (const f of comFile) {
    const com = require(`./commands/${f}`);
    client.commands.set(com.name, com);
}

client.once("ready", () => {
    console.log("This bot is online");
});

client.on("message", (msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).split(/ +/);
    const com = args.shift().toLocaleLowerCase();

    if (com === 'ping') {
        client.commands.get('ping').execute(msg, args);
    }

});


client.login(config.token);