const fs = require("node:fs");

const { REST, Routes } = require('discord.js');
const { ClientId } = require('../Config.js')

const rest = new REST({ version: '10' }).setToken(process.env.token);

module.exports = (client) => {
  const commands = [];
  fs.readdirSync("./SlashCommands/").forEach(async dir => {
    const commandsFiles = fs.readdirSync(`./SlashCommands/${dir}`).filter(file => file.endsWith(".js"))
    for (const file of commandsFiles) {
      const command = require(`../SlashCommands/${dir}/${file}`)
      commands.push(command.data.toJSON())
      client.ŚÇ.set(command.data.name, command)
    };
  });

  (async () => {
    try {
      console.log(`Started Refreshing ${commands.length} Application (/)`);
      
      const data = await rest.put(Routes.applicationCommands(ClientId), { body : commands })

        console.log(`Successfully Reloaded ${data.length} Application (/)`);
    } catch (error) {
      console.log(error)
    };
  })();
};