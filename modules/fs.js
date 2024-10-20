const fs = require('fs');
const path = require('path');

//create directory
// fs.mkdir(path.join(__dirname, '/new-folder'), {}, (err) => {
//     if (err) throw err;
//     console.log('Directory created...');
// })

// create file for writeFile method
fs.writeFile(path.join(__dirname, '/new-folder', 'new.txt'), 'Created by Node.js \n', (err) =>{
    if (err) throw err;
    console.log('File created...');
})

// create file for appendFile method
fs.appendFile(path.join(__dirname, '/new-folder', 'new.txt'), 're created by Node.js', (err) =>{
    if (err) throw err;
    console.log('File created...');
})