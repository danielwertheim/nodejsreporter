var	config = require('./config.js'),
    http = require('http');

module.exports.import = function (onsuccess) {
    http.get(config.jsonimporter.src, function(res) {
        var json = '';

        if (res.statusCode === 200) {
            res.setEncoding(config.encoding);

            res.on('data', function (chunk) {
                json += chunk;
            });

            res.on('end', function() {
                onsuccess(json);
            });
        }
    }).on('error', function (err) {
        console.log('Error: ' + err);
    });
};