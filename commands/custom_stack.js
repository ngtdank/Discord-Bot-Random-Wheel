const path = require('node:path');
const { SlashCommandBuilder, ActionRowBuilder, UserSelectMenuBuilder, ComponentType } = require('discord.js');

const utilPath = path.join(__dirname, 'utility');
const embedPath = path.join(utilPath, 'embed_layout.js');

const embed = require(embedPath);

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

		const create_name_list = 

		message.awaitMessageComponent({
			filter: collectorFilter,
			ComponentType: ComponentType.UserSelect,
			time: 60_000 })
			.then(i => {

				for (const snowflake_id of i.values) {
					returni.users.get(snowflake_id).globalName);
				}
			})
			.then(console.log(name_list))
			.then(i => i.followUp({ embeds: [embed] }))
			.catch(error => console.log(`${error}. No interactions were collected.`));
	},
};