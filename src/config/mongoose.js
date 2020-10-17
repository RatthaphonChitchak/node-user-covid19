'use strict'

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGO_DB_URI || process.env.MONGODB_URI || "mongodb+srv://covid19_01:PP2537wkd@covid19.ivklh.mongodb.net/coivid19?retryWrites=true&w=majority"
module.exports = function () {
    mongoose.set('debug', process.env.MONGO_DB_URI || process.env.MONGODB_URI || "mongodb+srv://covid19_01:PP2537wkd@covid19.ivklh.mongodb.net/coivid19?retryWrites=true&w=majority" ? false : true);
    let db = mongoose.connect(MONGODB_URI, function (err) {
        if (err) {
            console.log("MongoDB Notconnected..." + err);
        } else {
            console.log("MongoDB Connected...");
        }

    });

    var glob = require('glob'),
        path = require('path');

    glob.sync(path.join(__dirname, '../modules/**/models/*.js')).forEach(function (file) {
        require(path.resolve(file));
    });

    return db;
}