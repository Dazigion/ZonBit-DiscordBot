let fs = require('fs')
let folder = process.env.PWD + '/cmds/'
const funcCommands = {}
fs.readdir(folder, (err,files) => {
    files.forEach(file => {
        if (file.endsWith('.js')) {
            file = require(folder + file)
            funcCommands[file.cmd] = file.execute
        }
    })
})

delete fs,folder

module.exports = (message)=>{
    if (message.author.bot) return	

    let settings = database.getGuildSettings(message.guildId)
    let command = message.content.toLowerCase()
    
    if (command.startsWith('<@' + Client.user.id + '>') && !message.author.bot) {
        message.reply({content: "hia, im zonBit; ``" + settings.Prefix + "`` is the current prefix ^^"})
        return
    }
    
    else if (command in settings.staticCommands) {
        message.reply(settings.staticCommands[command])
        return
    }
    
    else if (!command.startsWith(settings.Prefix)) return
    
    let args = command.slice(settings.Prefix.length).split(/\s/)
    if (args[0] === '') {args.shift()}
    
    
    if (args[0] in funcCommands) funcCommands[args[0]]({settings:settings,message:message,args:args})
    
}