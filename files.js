// file manager in node js --- FIRST PROJECT

const fs = require('fs'); //file system module

// First - specyfing the files extensions....
const images = ['png', 'jpg', 'jpeg'];
const document = ['pdf', 'docx', 'doc'];
const videos = ['mp4', 'mov'];

//Read files from the source directory (folder named 'source')
fs.readdir('./source', (err, data) => {
  if(err){
    console.log(err)
   } else{
    console.log(data);
   } 
});
