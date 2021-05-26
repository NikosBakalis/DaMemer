FILE_LOCATION_TOKEN = 'TOKEN.txt';
FILE_LOCATION_EGW = 'word_texts/Egw.txt';
FILE_LOCATION_ELA = 'word_texts/Ela.txt';

const Discord = require('discord.js');
const lineReader = require('line-reader');
const fs = require('fs')

const client = new Discord.Client();

client.once('ready', () => {
    console.log('DaMemer is up online!');
})

const TOKEN = fs.readFileSync(FILE_LOCATION_TOKEN, 'utf8');

client.login(TOKEN);

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
    lineReader.eachLine(FILE_LOCATION_ELA, function(line) {
        if(msg.content.includes(line) && probability(10)) {
            msg.reply('ΚΑΡΒΕΛΑ 🤣🤣');
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
