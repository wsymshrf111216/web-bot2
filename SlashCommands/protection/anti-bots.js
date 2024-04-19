const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const db = require('pro.db')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('anti-bots')
    .setDescription('Blocker Join Bots at Discord Server')
    .addStringOption(option => 
        option 
        .setName('status')
        .setDescription('Pleas Select OFF / ON')
        .setRequired(true)
        .setChoices(
            { name: 'ON', value: 'on_anti'},
            { name: 'OFF', value: 'off_anti'},
        ))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
       	.setDMPermission(false),
        

        async execute(interaction, client) {

            const string = interaction.options.getString('status')
            let clientMember = await interaction.guild.members.fetch(client.user.id);
            if (!clientMember.permissions.has(PermissionFlagsBits.ManageGuild)) return interaction.reply({content: `Im Dont Have Permission`, ephemeral: true})
                 if (string === 'on_anti') {
                const Db = db.fetch(`Antibots_${interaction.guild.id}`)
                if (Db === true) return interaction.reply({content: `**The Blocker is Aready Enalad**`,ephemeral: true})
                db.set(`Antibots_${interaction.guild.id}`, true)
                interaction.reply({ content: `Robots Blocker has been Successfully Enabled`, ephemeral: true })
             }else if (string === 'off_anti') {
                const Db = db.fetch(`Antibots_${interaction.guild.id}`) 
                if (Db === false) return interaction.reply({content: `**The Blocker is Aready Disabled**`, ephemeral: true})
               
                db.set(`Antibots_${interaction.guild.id}`, false)
                interaction.reply({ content: `**Robots Blocker has been Successfully Disabled**`, ephemeral: true })
             }
        }

}