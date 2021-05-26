const Discord = require('discord.js');

const client = new Discord.Client()

client.once('ready', () => {
    console.log('DaMemer is up online!');
})

client.login('ODQ3MTE1NTg4MjM3MDAwNzI2.YK5X3g.iSZtuOCxiSBaCJIMF6GqAKkJ2us');

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
      msg.channel.send('pong');
    }
});
