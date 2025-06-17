const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`Error: No matching ${interaction.commandName} found`);
			return;
		}
		try {
			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Error executing command', flags: MessageFlags.Ephemeral });
			}
			else {
				await interaction.reply({ content: 'Error executing command', flags: MessageFlags.Ephemeral });
			}
		}
	},
};