module.exports = {
	'help'({message}) {
		message.reply("idk what to do with this bot :v \n i know theres alot of ideas but ehhhhhhhhhhh \n ``test``:YEET   ``ChangePrefix``: where you change prefix \n ``help``:have fun ^^")
	},
	
	'test'({message}) {
		message.reply("YEET")
	},
	
	'changeprefix'({message,args}) {
		const database = require('./database.js')
		database.setGuildPrefix(message.guildId,args[1])
		message.reply("prefix has been set to ``" + args[1] + "``")
	}
}