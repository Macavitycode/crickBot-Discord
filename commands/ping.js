module.exports = {
    name: 'ping',
    description: 'Replies with pong',
    execute(msg, args) {
        msg.channel.send("pong!\n~hehe~ This is for testing to check if I'm up");
    }
}