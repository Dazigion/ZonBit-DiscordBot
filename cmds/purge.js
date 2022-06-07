


module.exports = {
    cmd: 'purge',
    execute: ({message,args}) => {
		let perms = discord.Permissions.FLAGS

		if (!message.member.permissions.has(perms.MANAGE_MESSAGES)) {
			return message.reply("you dont have the permision to use this command")}
		else if (!message.guild.me.permissions.has(perms.MANAGE_MESSAGES)) {
			return message.reply("i dont have the permision to delete the messages (MANAGE_MESSAGES)")}

		function purge({limit,after,before}) {

			message.channel.messages.fetch({limit: limit,after: after,before: before}).then(messages => {

				message.channel.bulkDelete(messages.map(x => x.id).push(before || after)).catch((err) => {
					message.reply(err.toString())
				})

			}).catch((err) => {
				message.reply(err.toString())
			})
		
		}


		if (message.reference != undefined) {
			purge({limit:100,after: message.reference.messageId})
		}

		else if (!isNaN(parseInt(args[1]))) {
			let int = parseInt(args[1]) - 1
			
			if (int < 0) {
				message.reply("no")
				return
			}
			
			purge({limit:int,before:message.id})
		}

		else {
			message.reply("USAGE: ``purge <NoOfMessages/Reply>``")
		}

		return
		
	}
}