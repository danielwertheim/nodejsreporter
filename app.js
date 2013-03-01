var config = require('./lib/config'),
	importer = require('./lib/jsonimporter.fake'),
	writer = require('./lib/reportwriter');
	
importer.import(function (json) {
	writer.write(json);
});