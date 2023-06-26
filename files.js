// file manager in node js --- FIRST PROJECT

const fs = require('fs'); //file system module

// First - specyfing the files extensions....
const images = ['png', 'jpg', 'jpeg'];
const document = ['pdf', 'docx', 'doc'];
const videos = ['mp4', 'mov'];

//Read files from the source directory (folder named 'source')

fs.readdir('./source', (err, files) => {
  if(err){
    console.log(err)
   } else {
    files.forEach((file) => {
      if(file == '.jpg'){
        console.log('there is a .jpg file')
      }
    })
   } 
});
