const Discord = require("discord.js");
const fs = require("fs");

const prefix = "-"

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
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const com = args.shift().toLocaleLowerCase();

    if (com === 'ping') {
        client.commands.get('ping').execute(msg, args);
    } else if (com === 'get') {
        client.commands.get('getscore').execute(msg, args);
    }

});

// Comment out this for deployment
const configFile = require("./config.json");
token = configFile.token;
client.login(token)

// // Uncomment for deployment
// client.login(process.env.token);