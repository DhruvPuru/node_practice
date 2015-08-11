var fs = require('fs');

fs.readFile(process.argv[2], function read(err, data) {
    if (!err) {
    	var buf = data;
    }
    var str = buf.toString();
	var split = str.split('\n');
	console.log(split.length - 1);
});
