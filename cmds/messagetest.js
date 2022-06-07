

module.exports = {
    cmd: 'messagetest',
	title: 'Message Test',
	description: 'shows commands and stuff',
	
	execute: ({message,settings,args}) => {

        let ReplaceableChr = {
        'user': "ZonBit"
    }
    let messageS = message.content.slice(args[0].length + settings.Prefix.length + 1).replace(/{\w+}/,(x)=>{
        let chr = x.slice(1,-1);
        if (chr in ReplaceableChr) return ReplaceableChr[chr]
        return x
    })
    messageS = JSON.parse(messageS)
    message.reply(messageS).catch((err) => {
        message.reply(err.toString())
        console.log(err)
    res()
    })}


}