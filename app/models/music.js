/**
 * Created by nico on 16/06/15.
 */
var mongoose = require('mongoose');

var musicSchema = mongoose.Schema({
    title       :   { type : String, index : true },
    url         :   String
});

module.exports = mongoose.model('Music', musicSchema);