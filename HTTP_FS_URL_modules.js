const fs = require('fs');
const path = require('path');
// using readFileSync(path,options, callback)
const writtenFile = path.join(__dirname, 'file_data', 'file.txt');
// fs.readFile(writtenFile, 'utf-8', (blabla,blublu) => {
//   if(blabla) throw blabla;// first parameter is always err, the second parameter is always data;
//   console.log(blublu);
  
// });
// writeFile(path, data, options, callback)
const data = 'phuoc is my name PART 2';
fs.writeFile(writtenFile, data, 'utf-8', (err) => {
  if(err) throw err;
  console.log('successfully');
  fs.readFile(writtenFile, 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
  })
});
