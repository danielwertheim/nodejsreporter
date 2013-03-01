var	config = require('./config.js'),
    fs = require('fs');

module.exports.import = function (onsuccess) {
    fs.readFile(config.paths.resources + 'sampledata.json', config.encoding, function(err, json) {
        onsuccess(json);
    });
};