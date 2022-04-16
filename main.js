require('dotenv').config()
const discord = require("discord.js")
const Database = require("./Database.js")

const Client = new discord.Client(
  {intents:[
    (1<<0), //Guild
    (1<<9)  //GuildMessages
    ]})

Client.on('ready',()=>{
  console.log('online')
})


var usrCooldown = {
  
}

Client.on('messageCreate',async (message)=>{

  let settings = {...Database.load("BasicSettings","Default"),...Database.load(message.GuildId,"BasicSettings")}
  
  console.log(settings)
  
  let command = message.content.toLowerCase()
  
  if (!command.startsWith(settings.Prefix) || message.author.id in usrCooldown) return
  
  usrCooldown[message.author.id] = true
  
  
  
  delete usrCooldown[message.author.id]
})


Client.login(process.env.DiscordToken) // i have no clue on how github work























