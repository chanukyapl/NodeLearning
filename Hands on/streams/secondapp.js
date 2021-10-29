var fs=require('fs');
var wr=fs.createWriteStream('new_data_file.txt');
var re=fs.createReadStream('input.txt');
re.pipe(wr);