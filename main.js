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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var usrCooldown = {
  
}

Client.on('messageCreate',async (message)=>{
  
		
  
  if (message.author.id in usrCooldown && usrCooldown[message.author.id] === true) {
    return
  }
  
  let command = message.content.toLowerCase()
  
  usrCooldown[message.author.id] = true
  
  let args = command.split(' ')
 
  
  usrCooldown[message.author.id] = null
})


sleep(5).then(()=>{
	Client.login("") // i have no clue on how github work
})























