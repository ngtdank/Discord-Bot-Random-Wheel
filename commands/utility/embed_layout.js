const { EmbedBuilder } = require('discord.js');

module.exports = {
	embed_layout: new EmbedBuilder()
		.setColor(0xff3f33)
		.setTitle('Custom Match Randomizer')
		.setDescription('Some description here')
		// Name is based on first person selected for both team
		.addFields(
			{ name: ' 1Team', value: 'Hellon', inline: true },
			{ name: `${value}'s team`, value: 'Viet', inline: true },
		),

	add_name_to_field(name) {
		this.embed_layout.addFields({ value: name });
	},
};