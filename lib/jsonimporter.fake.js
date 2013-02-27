var	config = require('./config.js'),
    fs = require('fs');

exports.import = function (onsuccess) {
    fs.readFile(config.paths.resources + 'sampledata.json', config.encoding, function(err, json) {
        onsuccess(json);
    });
};