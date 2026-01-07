var telerivet = require('telerivet');

var tr = new telerivet.API(YOUR_API_KEY);
var project = tr.initProjectById(project_id);

project.sendMessage({
    content: "hello world", 
    to_number: "+16505550123"
}, function(err, message) {

});