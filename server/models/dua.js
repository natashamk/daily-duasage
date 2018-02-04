var mongoose = require('mongoose');
var DuaSchema = new mongoose.Schema({
    name: String,
	arabic: String,
    transliteration: String,
    translation: String

   });
   
var Dua = mongoose.model('Dua', DuaSchema)