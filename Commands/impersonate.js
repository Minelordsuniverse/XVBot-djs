const { SlashCommandBuilder } = require("discord.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName("impersonate")
    .setDescription("Makes you look, or more like, pretend to be someone else")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Mention a user you want to impersonate")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("What message do you want to pretend the user will type?")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const { options } = interaction;

    const member = options.getUser("user");
    const message = options.getString("message");
    interaction.channel
      .createWebhook({
        name: member.username,
        avatar: member.displayAvatarURL({ dynamic: true }),
      })
      .then((webhook) => {
        webhook.send({ content: message });
        setTimeout(() => {
          webhook.delete();
        }, 3000);
      });
    interaction.reply({
      content: "Said user has been impersonated by... you, you little harbinger of an identity crisis.",
      ephemeral: true,

    });
  },
};