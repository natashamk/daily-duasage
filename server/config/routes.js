var duas = require("../controllers/duas.js");
var path = require('path');

module.exports = function(app){
    app.get("/duas", duas.showAll),
    // app.post("/duas", duas.createTask),
    app.get("/duas/:name", duas.showDua)
}