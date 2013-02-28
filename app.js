var config = require('./lib/config'),
	importer = require('./lib/jsonimporter.fake'),
	reporter = require('./lib/reporter');
	
importer.import(function (json) {
	reporter.generate(json);
});