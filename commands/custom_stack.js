const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder, ComponentType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('custom_stack')
		.setDescription('Create randomized custom game stack'),

	async execute(interaction) {
		const userSelect = new UserSelectMenuBuilder()
			.setCustomId('users')
			.setPlaceholder('Select multiple users.')
			.setMinValues(1)
			.setMaxValues(10);

		const row = new ActionRowBuilder()
			.addComponents(userSelect);

		const message = await interaction.reply({
			content: 'Select players:',
			components: [row],
		});

		const collectorFilter = async i => {
			await i.deferUpdate();
			return i.user.id === interaction.user.id;
		};

		message.awaitMessageComponent({ filter: collectorFilter, ComponentType: ComponentType.UserSelect, time: 60_000 })
			.then(async i => await i.followUp(`${i.values.join(', ')}`));
	},
};