



module.exports = (interaction) => {
	if (interaction.isSelectMenu()) {

		if (!interaction.member.permissions.has(discord.Permissions.FLAGS.MANAGE_GUILD)) {
			interaction.reply({
				content: 'no <@' + interaction.member.id + '>',
				ephemeral: true
			})
			return
		}

	const modal = new discord.Modal()
	.setCustomId('TEST')
	.setTitle('TEST')
	.addComponents(
		new discord.MessageActionRow().addComponents(
			new discord.TextInputComponent()
			.setStyle('SHORT')
			.setCustomId('TEST')
			.setLabel('HMMM')
	)	)
	


	interaction.showModal(modal)
	}
}