


module.exports = {
    cmd: 'settings',
	title: 'Message Test',
	description: 'shows commands and stuff',
    execute: ({message,settings}) => {
        let f = []
        for (var m in settings) {

            if (typeof(settings[m]) === 'object') {
                var rr = ''
                for (var k in settings[m]) {
                    rr = rr + k + ':' + settings[m][k] + '\n'
                }
                settings[m] = rr
            }

            if (settings[m] != '') {
                f.push({
                    "name": m,
                    "value": "```" + settings[m] + "```",
                    "inline": true
                })
            }
        }

        const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageSelectMenu()
            .setCustomId('settings')
            .addOptions([{
                label: 'Change Prefix',
                value: 'prefix'
            },{
                label: 'Change Welcome Message',
                value: 'welcome'
            },{
                label: 'Change Goodbye Message',
                value: 'bye'
            }
            ])
        )

        message.reply({
            "content": "ON BETA! (note: enable embeds)",
            "embeds": [
            {
                "title": "Guild Settings!",
                "color": null,
                "fields": f
            }
            ],
            components: [row]
        })
}}