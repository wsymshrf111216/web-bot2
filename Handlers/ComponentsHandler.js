const { Client } = require('discord.js')


function loadComponents(client) {
    const ascii = require('ascii-table');
    const fs = require('fs')
    const table = new ascii().setHeading("SlashCommands", "Type", "Status")

    const componentFolder = fs.readdirSync(`./SlashCommands`);
    for (const folder of componentFolder) {
        const componentFiles = fs.readdirSync(`./SlashCommands/${folder}`).filter(file => file.endsWith('.js'));

        const { modals, buttons } = client;
        switch (folder) {
            case "buttons": {
                for (const file of componentFiles) {
                    const button = require(`../SlashCommands/${folder}/${file}`)
                    buttons.set(button.data.name, button);
                    table.addRow(file, "button", "✅");
                }
            }
            break;

            case "modals": {
                for (const file of componentFiles) {
                    const modal = require(`../SlashCommands/${folder}/${file}`)
                    modals.set(modal.data.name, modal)
                    table.addRow(file, "modal", "✅");
                }
            }
            break;
        
            default:
                break;
        }
        continue;
    }

    return console.log(table.toString(), "\nLoaded SlashCommands!");
}

module.exports = { loadComponents }