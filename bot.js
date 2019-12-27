require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const regex = new RegExp(/when.*advance/, 'i');

const date = 'Dec/27';
const time = '9PM est';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content && regex.test(message.content)) {
    message.channel.send(`Hey ${message.member} the next advance is on ${date} @ ${time}`);
  }
});

client.login(process.env.AUTH_TOKEN);