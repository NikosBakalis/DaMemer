FILE_LOCATION_EGW = 'word_texts/Egw.txt';

const Discord = require('discord.js');
const lineReader = require('line-reader');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('DaMemer is up online!');
})

client.login('ODQ3MTE1NTg4MjM3MDAwNzI2.YK5X3g.iSZtuOCxiSBaCJIMF6GqAKkJ2us');

client.on('message', msg => {
    if(probability(1)) {
        msg.reply('ΜΑΛΑΚΑ ΒΟΥΛΩΝΕ 👌');
    }
    if(msg.content === 'ping' && probability(100)) {
      msg.reply('pong');
    }
    lineReader.eachLine(FILE_LOCATION_EGW, function(line) {
        if(msg.content.includes(line) && probability(20)) {
            msg.reply('ΚΑΛΑ ΕΣΥ!');
        }
    });
});

function probability(x) {
    num = Math.floor(Math.random() * 100) + 1;
    if(num <= x) {
        return true;
    }
    else return false;
}
