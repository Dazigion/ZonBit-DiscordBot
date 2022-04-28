const discord = require("discord.js")
const database = require('./database.js')
const funcCommands = require('./functions.js')

const Client = new discord.Client(
	{intents:[
		(1<<0), //Guilds
		(1<<9),	//GuildMessages
		(1<<5),  //GuildWebhooks
	]})

Client.on('ready',()=>{
	console.log('online')
})


var usrCooldown = []

function sleep (ms) {
	return new Promise((res,rej) => {
		setTimeout(()=>{res()},ms)
	})
}

Client.on('messageCreate',async (message)=>{
	if (message.author.bot || usrCooldown.indexOf(message.author.id) !== -1) return
	usrCooldown.push(message.author.id)
	
	try{
		
		let settings = database.getGuildSettings(message.guildId)
		let command = message.content.toLowerCase()
		
		if (command.startsWith('<@' + Client.user.id + '>') && !message.author.bot) {
			message.reply({
				content: "hia, im zonBit; ``" + settings.Prefix + "`` is the current prefix ^^",
				allowedMentions: {}
				})
			return
		}
		
		else if (command in settings.staticCommands) {
			message.reply(settings.staticCommands[command])
			return
		}
		
		else if (!command.startsWith(settings.Prefix)) return
		
		let args = command.slice(settings.Prefix.length).split(' ')
		if (args[0] === '') {args.shift()}
		
		
		if (args[0] in funcCommands) await funcCommands[args[0]]({settings:settings,message:message,args:args})
		
	}
	catch(err) {console.log(err)}
	await sleep(1000)
	usrCooldown.splice(usrCooldown.indexOf(message.author.id),1)
})

Client.login(process.argv[2])























