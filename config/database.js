// models/index.js
if (!global.hasOwnProperty('db')) {

    var mongoose = require('mongoose');

    var dbName = 'expressTest'

    // the application is executed on the local machine ...
    mongoose.connect('mongodb://localhost/' + dbName);


    global.db = {

        mongoose: mongoose,

        //models
        User:           require('../app/models/user')(mongoose),

        Music:          require('../app/models/music')(mongoose)
    };

}

module.exports = global.db;