const { SlashCommandBuilder, MessageFlags, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor(0xff3f33)
	.setTitle('Custom Match Randomizer')
	.setDescription('Some description here')
	// Name is based on first person selected for both team
	.addFields(
		{ name: 'Team 1#', value: 'Hellon', inline: true },
		{ name: 'Team 2#', value: 'Viet', inline: true },
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wheel')
		.setDescription('Write things to add to wheel, seperate by comma (",")'),

	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed], flags: MessageFlags.Ephemeral });;
	},
};