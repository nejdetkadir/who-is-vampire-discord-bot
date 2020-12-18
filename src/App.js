const dotenv = require('dotenv').config();
const {Client, VoiceChannel} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log('connected to discord');
});

client.login(process.env.DISCORD_TOKEN);