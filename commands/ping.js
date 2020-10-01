module.exports = {
    name: 'ping',
    description: 'Replies with pong',
    execute(msg, args) {
        msg.channel.send('pong!');
    }
}