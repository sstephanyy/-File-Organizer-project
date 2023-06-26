// file manager in node js --- FIRST PROJECT

const fs = require('fs'); //file system module
const path = require('path');

// First - specyfing the files extensions....
const images = ['.png', '.jpg', '.jpeg'];
const documents = ['pdf', 'docx', 'doc'];
const videos = ['mp4', 'mov'];

//make a image folder

if (!fs.existsSync('./images')) {
  fs.mkdir('./images', (err) => {
    err ? console.log(err) : console.log('Folder created!!');
  });
} 

//readdir - get  list of every file inside the folder...
fs.readdir('./source', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      const filesExtention = path.extname(file).toLowerCase(); //path.extname allow you to extract specific components from file paths, such as file extensions.
      if (images.includes(filesExtention)) {
        console.log(filesExtention);
      }       
    });
  }
});
