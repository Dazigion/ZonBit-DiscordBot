const fs = require("fs")
const StorageLocation = "./Storage"

let rawfunc = { //Save Load Update Delete no caps
		
	save:(id,idType,data) => {
		return new Promise((res,rej)=>{
			let location = StorageLocation + "/" + idType + "/"
			data = JSON.stringify(data)
			
			if (!fs.existsSync(location)) fs.mkdirSync(location)
			
			fs.writeFile(location + id ,data, function(err) {
			if (err) rej(err) 
			res(true)
			})
		})
	},
	
	load: (id,idType) => {
		return new Promise ((res,rej)=>{
			let location = StorageLocation + "/" + idType + "/"
			
			if (!fs.existsSync(location + id)) rej("NoFileSelected")
			
			fs.readFile(location + id,(err,data)=>{
				if (err) rej(err)
				res(JSON.parse(data))
			})
			
		})
	},
	
	update: (id,idType,data) => {
		return new Promise (async (res,rej)=>{
			let OldData = await rawfunc.load(id,idType)
			await rawfunc.save(id,idType,{...OldData,...data})
			res(true)	
		})
	},
	
	delete: (id,idType) => {
		return new Promise (async (res,rej)=>{
			let location = StorageLocation + "/" + idType + "/"
			fs.unlinkSync(location + id)
			res(true)
		})
	}
	
}


module.exports = rawfunc