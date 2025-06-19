const { EmbedBuilder } = require('discord.js');

module.exports = {
	embed_layout: new EmbedBuilder()
		.setColor(0xff3f33)
		.setTitle('Custom Match Randomizer')
		.setDescription('Some description here')
		// Name is based on first person selected for both team
		.addFields(
			{ name: 'Team 1#', value: 'Hellon', inline: true },
			{ name: 'Team 2#', value: 'Viet', inline: true },
		),
};