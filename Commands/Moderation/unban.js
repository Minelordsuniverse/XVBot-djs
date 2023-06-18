const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  premiumOnly: false,
  moderatorOnly: true,
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unban a member from the discord server.")
    .setDMPermission(false)
    .addStringOption(option =>
      option.setName("userid")
        .setDescription("UserID [obv of the banned member] you want to unban.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { channel, options } = interaction;

    const userId = options.getString("userid");

    try {
      await interaction.guild.members.unban(userId);

      const embed = new EmbedBuilder()
        .setDescription(`Unbanned ${userId} from the guild.`)
        .setColor(0x5fb041)
        .setTimestamp();

      await interaction.reply({
        embeds: [embed],
      });
    } catch (err) {
      console.log(err);

      const errEmbed = new EmbedBuilder()
        .setDescription(`Please provide a valid userID.`)
        .setColor(0xc72c3b);

      interaction.reply({ embeds: [errEmbed], ephemeral: true });
    }
  }
}
