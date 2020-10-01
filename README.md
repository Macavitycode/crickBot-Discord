# crickBot-Discord

This is a simple experimental bot for discord that gets the latest cricket scores of ongoing matches.

## Setup and usage

There are two parts to the setup: the coding part and the discord part. Here's the [reference](https://www.youtube.com/watch?v=j_sD9udZnCk&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=1) used.

### Initialisation

Incase you are making a new bot, follow this. If you are planning to use this bot, skip this section and continue from Discord setup

- Start a project by running `npm init`.
- Install the discord api with `npm install discord`.
- Add your code to the file as mentioned as entry point in `package.json`.

Follow the steps mentioned in Discord setup and add your own bot.

### Discord setup

- Go to [discord applications](https://discord.com/developers/applications) and make a new application.
- Click on the application you made to select it, and set the name and icon as needed in `general information`. Note the value of the `client id` field.
- [NOTE: Do this for local hosting] Under `Bot`, set the display name and profile picture as needed. Copy the value of `token` into `config.json` in the format as shown:

```json
{
  "token": "Your token here",
  "prefix": "-"
}
```

-
- Feel free to set the prefix to whatever needed
- Use [this](https://discordapi.com/permissions.html) website to help with selecting permissions. Copy the `client id` as noted into the `client id` field here.
  - Current list of permissions:
    - Read Messages
    - Send Messages
    - Embeded links
    - View channel
  - Current [link](https://discord.com/oauth2/authorize?client_id=761100578939076608&scope=bot&permissions=19520)
- Use the link generated to invite the bot to a server.

### Coding setup

Make sure to have node js installed.

- Clone this repo into a folder and run `npm install` in the same.
- Once required packages are installed, do `node ./index.js` to start hosting the bot.
