const { SlashCommandBuilder, Permissions, PermissionsBitField } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("clear")
      .setDescription("Clear messages")
      .setDMPermission(false)
      .addStringOption((option) =>
        option
          .setName("amount")
          .setDescription("The number of messages to clear")
          .setRequired(true)
      )
      .addUserOption((option) =>
        option.setName("user").setDescription("Clear messages of a specific user")
      ),
    async execute(interaction) {
      // get amount and user options from interaction
      const amount = interaction.options.getString("amount");
      const user = interaction.options.getUser("user");
  
      // check if person running the cmd has perms (to manage msgs)
      if (
        !interaction.member.permissions.has(PermissionsBitField.ManageMessages)
      ) {
        return interaction.reply({
          content: "You do not have permission to use this command.",
          ephemeral: true,
        });
      }
      // checking if # of msgs req'd is more than 0
      if (isNaN(amount) || parseInt(amount) < 1) {
        return interaction.reply({
          content: "Please provide a valid number greater than 0.",
          ephemeral: true,
        });
      }
      // defer the reply to reduce API overhead
      await interaction.deferReply({ ephemeral: true });
  
      // # of msgs that have been deleted (so far)
      let deletedSize = 0;
  
      // if the user specified any user to clear msgs from
      if (user) {
        let fetchedMessages;
        let lastMessageId = null;
  
        // keep fetching msgs until there are no more msg to delete
        do {
          fetchedMessages = await interaction.channel.messages.fetch({
            limit: 100, // batches of 100
            before: lastMessageId, // fetch msgs
          });
  
          // filter for only those spent by specified user
          const messagesToDelete = fetchedMessages.filter(
            (m) => m.author.id === user.id
          );
          // # of msgs to delete in the current batch
          const messagesToDeleteSize = messagesToDelete.size;
  
          // if there are msgs to delete, delete them and add to the total deleted size
          if (messagesToDeleteSize > 0) {
            const deletedMessages = await interaction.channel.bulkDelete(
              messagesToDelete,
              true // deleting msgs permanently from the channel
            );
            deletedSize += deletedMessages.size;
          }
  
          lastMessageId = fetchedMessages.last()?.id; // setting ID of the last msg in the batch
        } while (fetchedMessages.size === 100); // keep fetching msgs until there are no more msgs left to fetch
  
        // if the user specified # of msgs to delete
      } else {
        // keep deleting msgs until the desired number of msgs have been deleted
        while (deletedSize < amount) {
          const remainingAmount = amount - deletedSize; // # of remaining msgs to delete
          const batchSize = remainingAmount > 100 ? 100 : remainingAmount; //deleting msgs in batches of 100 or less, depending on # of remaining msgs
  
          const fetchedMessages = await interaction.channel.messages.fetch({
            limit: batchSize, // fetching msgs in batches
          });
          const deletedMessages = await interaction.channel.bulkDelete(
            fetchedMessages,
            true // deleting msgs permanently from the channel
          );
  
          // if there are msgs deleted, update 'deletedSize'
          if (deletedMessages.size > 0) {
            deletedSize += deletedMessages.size;
          } else {
            // if no msgs are deleted, stop the loop
            break;
          }
        }
      }
  
      const deletedUser = user ? user.username : "everyone";
  
      return interaction.followUp({
        content: `Deleted **${deletedSize}** msgs sent by ${deletedUser} lol`,
      });
    }, 
  };