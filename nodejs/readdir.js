const textFolder = './data';
const fs = require('fs');

fs.readdir(textFolder, function(error, filelist){
    console.log(filelist);
});