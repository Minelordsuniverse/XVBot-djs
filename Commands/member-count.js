const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

const embed = new EmbedBuilder();

module.exports = {

    data: new SlashCommandBuilder()
    .setName("member-count")
    .setDescription("Shows the amount of members in this server, users & bots alike."),
    async execute(interaction) {

        const memberCount = (await interaction.guild.members.fetch()).filter(member => !member.user.bot).size;
        const totalCount = interaction.guild.memberCount;
        const botCount = (await interaction.guild.members.fetch()).filter(member => member.user.bot).size;

        interaction.reply({embeds: [embed.setDescription(`
        There are **${totalCount}** members in this server. To go into specifics... Bots: **${botCount}** - Users: **${memberCount}**!
        `).setColor('Orange')]})

    },
};