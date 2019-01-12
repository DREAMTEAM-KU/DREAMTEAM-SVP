var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/tgr2019test';
var collections = ['test'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};