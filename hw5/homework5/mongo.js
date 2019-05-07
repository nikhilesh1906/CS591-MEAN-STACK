const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27107';

let db;

module.exports = {
    connectToServer: function (callback) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('test_db');
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};
