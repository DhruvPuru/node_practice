var fs = require('fs');
var path = require('path');

var dir_path = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dir_path, function callback(err, list) {
	for (var i = 0; i < list.length; i++) {
		var cur_extention = path.extname(list[i]);
		if (cur_extention === extension) {
			console.log(list[i]);
		}
	}
});