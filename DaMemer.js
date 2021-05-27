FILE_LOCATION_TOKEN = 'TOKEN.txt';
FILE_LOCATION_EGW = 'word_texts/Egw.txt';
FILE_LOCATION_ELA = 'word_texts/Ela.txt';

const Discord = require('discord.js');
const lineReader = require('line-reader');
const fs = require('fs');

const client = new Discord.Client();


client.on('message', msg => {
    if(msg.author.bot) {
        return;
    }
    if(probability(1)) {
        msg.reply('ΜΑΛΑΚΑ ΒΟΥΛΩΝΕ 👌');
    }
    if(msg.content === 'ping') {
        msg.reply('pong');
    }
    lineReader.eachLine(FILE_LOCATION_EGW, function(line) {
        if(msg.content.includes(line) && probability(40)) {
            msg.reply('ΚΑΛΑ ΕΣΥ!');
        }
    });
    lineReader.eachLine(FILE_LOCATION_ELA, function(line) {
        if(msg.content.includes(line) && probability(30)) {
            msg.reply('ΚΑΡΒΕΛΑ 🤣🤣');
        }
    });
});

client.on('typingStart', (channel, user) => {
    if(probability(5)) {
        channel.send('ΕΛΑ, ΠΕΣ ΤΗ ΜΑΛΑΚΙΑ ΣΟΥ! 👍');
    }
    if(probability(35) && user.id === '359676358671990786') {
        channel.send('ΩΩΩΧ ΘΑ ΜΙΛΗΣΕΙ Ο ΜΟΛΔΑΒΟΣ!!! 🤣🤣🤣');
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let newUserState = newState.channelID;
    let oldUserState = oldState.channelID;
    let channel = client.channels.cache.find(channel => channel.id === '401499524704763907');

    if(newUserState === '706241218501410856' && probability(30))
    { 
        // User Joins a voice channel
        channel.send("ΒΡΕ ΚΑΛΩΣ ΤΟ ΜΑΛΑΚΑ!");
    }
    else if(probability(20)){
        // User leaves a voice channel
        channel.send("ΕΛΑ ΕΛΑ ΠΟΛΥ ΣΕ ΑΚΟΥΣΑΜΕ!");
    }
})

function probability(x) {
    num = Math.floor(Math.random() * 100) + 1;
    if(num <= x) {
        return true;
    }
    else return false;
}

client.once('ready', () => {
    console.log('DaMemer is up online!');
})

const TOKEN = fs.readFileSync(FILE_LOCATION_TOKEN, 'utf8');

client.login(TOKEN);
