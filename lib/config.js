module.exports = {
    encoding: 'utf8',
    paths: {
        resources: 'resources/',
        output: 'output/'
    },
    jsonimporter: {
        src: {
            hostname: 'youtrack.jetbrains.com',
            port: 80,
            path: '/rest/issue/byproject/RSRP?max=50&filter=Type%3A+Bug+Affected+versions%3A+8.0+order+by%3A+Priority+&with=id&with=summary&with=description&with=priority&with=state',
            headers: {
                accept: 'application/json'
            }
        }
    }
};