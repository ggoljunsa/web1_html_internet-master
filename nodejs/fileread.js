const fs = require('fs');
fs.readFile('example.txt', 'utf8', function(err, data){
    console.log(data);
});
