const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const dotenv = require('dotenv');

dotenv.config();

const TOKEN = process.env.TOKEN;
const SERVER_ID = process.env.SERVER_ID;
const CLIENT_ID = process.env.CLIENT_ID;

// Command list
const command_list = [];

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// prevent error from unfinished command from executing
	if ('data' in command && 'execute' in command) {
		command_list.push(command.data.toJSON());
	}
	else {
		console.log(`!!! Missing property at command ${filePath} !!!`);
	}
}

const rest = new REST().setToken(TOKEN);

(async () => {
	try {
		console.log(`Refreshing ${command_list.length} command(s).`);

		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, SERVER_ID),
			{ body: command_list },
		);

		console.log(`${data.length} command(s) loaded successfully`);
	}
	catch (error) {
		console.error(error);
	}
})();