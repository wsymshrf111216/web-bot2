const { Client } = require('discord.js')
const fs = require('fs')


module.exports = async function(Client) {
    fs.readdir('./Commands/', async function(Err, Files) {
        if(Err) return console.error(Err)
        Files.forEach((Command) => {
            if(!Command.endsWith('.js')) return;
            const Commands = require(`../Commands/${Command}`)
            const CommandName = Command.split('.')[0]
            Client.Çɱɗ.set(CommandName, Commands) 
        })
    })
};