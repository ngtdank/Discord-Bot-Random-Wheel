const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wheel')
		.setDescription('Write things to add to wheel, seperate by comma (",")'),

	async execute(interaction) {
		await interaction.reply('Something');
	},
};