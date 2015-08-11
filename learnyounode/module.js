var path = require('path');

module.exports = function read_dir(dir_path, file_ext, callback) {
	file_ext = '.' + file_ext;
	fs.readdir(dir_path, function callback(err, list) {
		for (var i = 0; i < list.length; i++) {
			var cur_extention = path.extname(list[i]);
			if (cur_extention === file_ext) {
				console.log(list[i]);
			}
		}
	})
};