const fs = require("fs")
const StorageLocation = "./Storage"

let rawfunc = { //Save Load Update Delete no caps
		
	save:(id,idType,data) => {
		let location = StorageLocation + "/" + idType + "/"
		data = JSON.stringify(data)
		
		if (!fs.existsSync(location)) fs.mkdirSync(location)
		
		fs.writeFile(location + id ,data, function(err) {
			if (err) {console.log(err)}
		})
		return "Unknown"
	},
	
	load: (id,idType) => {
		let location = StorageLocation + "/" + idType + "/"
			
		if (!fs.existsSync(location + id)) {console.log("NoFileFound"); return {}}
		
		return JSON.parse(fs.readFileSync(location + id))
	},
	
	update: (id,idType,data) => {
		let OldData = rawfunc.load(id,idType)
		rawfunc.save(id,idType,{...OldData,...data})
		return(true)	
	
	},
	
	delete: (id,idType) => {
		let location = StorageLocation + "/" + idType + "/"
		fs.unlinkSync(location + id)
		return(true)
	}
	
}


module.exports = rawfunc