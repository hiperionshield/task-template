const fs = require('fs')
fs.readdir('.', (err, files)=>{
  console.log(files)
  files.forEach(file => {
    console.log(file);
  });
})