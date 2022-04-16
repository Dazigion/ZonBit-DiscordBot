const discord = require("discord.js")
const Database = require("./Database.js")
//YEET
const Client = new discord.Client(
  {intents:[
    (1<<0), //Guild
    (1<<9)  //GuildMessages
    ]})

Client.on('ready',()=>{
  console.log('online')
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var usrCooldown = {
  
}

Client.on('messageCreate',async (message)=>{
  
		
  
  if (message.author.id in usrCooldown) {
    return
  }
  
  let command = message.content.toLowerCase()
  
  usrCooldown[message.author.id] = true
  
  let args = command.split(' ')
  console.log(message.content)
  
  delete usrCooldown[message.author.id]
})


sleep(5).then(()=>{
	require('dotenv').config()
	Client.login(process.env.DiscordToken) // i have no clue on how github work
})























