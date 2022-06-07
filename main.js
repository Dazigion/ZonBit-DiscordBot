discord = require("discord.js")
database = require('./Storage/database.js')

Client = new discord.Client(
	{intents:[
		(1<<0), //Guilds
		(1<<9),	//GuildMessages
		(1<<5),  //GuildWebhooks
	]})

Client.on('ready',async ()=>{
	console.log(Client.user.username + ' is Online ')
})


Client.on('messageCreate',require('./on/messageCreate.js') )

//https://discordjs.guide/popular-topics/collectors.html#basic-message-component-collector
Client.on('interactionCreate',require('./on/interactionCreate.js'))




Client.login(process.argv[2])
