const path = require('path');
const fs = require('fs');

let PAGES_DIR = path.join(__dirname, '../dist/');
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'));

console.log(PAGES);

for(let fl of PAGES){
	let file = PAGES_DIR + fl;
	fs.readFile(file, "utf-8", function (err, data) {
		if (err)
			return console.log(err);

		// console.log(file + " File content before replace: '\/assets'");
		// console.log(data);

		let renameMe = "\/assets";
		let re = RegExp(renameMe, "g");

		data = data.replace(re, "assets");
		fs.writeFileSync(file, data);

		// console.log(file + " File content after replace: 'assets' ");
		// console.log(data);
	});
}