const fs = require("fs")
const StorageLocation = "./Storage"




let rawfunc = { //Save Load Update Delete no caps
		
	save:(id,idType,data) => {
		let location = StorageLocation + "/" + idType + "/"
		data = JSON.stringify(data,null,2)
		
		if (!fs.existsSync(location)) fs.mkdirSync(location)
		
		fs.writeFileSync(location + id + '.json',data,'utf-8')
		return
	},
	
	load: (id,idType) => {
		let location = StorageLocation + "/" + idType + "/"
			
		if (!fs.existsSync(location + id + '.json')) {return {}}
		
		return JSON.parse(fs.readFileSync(location + id + '.json','utf-8'))
	},
	
	update: (id,idType,data) => {
		let OldData = rawfunc.load(id,idType)
		rawfunc.save(id,idType,{...OldData,...data})
		return
	
	},
	
	delete: (id,idType) => {
		let location = StorageLocation + "/" + idType + "/"
		fs.unlinkSync(location + id + '.json')
		return
	}
	
}


module.exports = {
	getGuildSettings:(GuildId) => {
		return {...rawfunc.load("GuildSettings","Default"),...rawfunc.load(GuildId,"GuildSettings")}
	},
	setGuildPrefix:(GuildId,prefix) => {
		return rawfunc.update(GuildId,"GuildSettings",{Prefix:prefix})
	}
}