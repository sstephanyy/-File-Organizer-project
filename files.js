const fs = require('fs');
const path = require('path');

const images = ['.png', '.jpg', '.jpeg'];
const source = './source';
const imageFolder = './images';

if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder);
  console.log('Image folder created!');
}

fs.readdir(source, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  files.forEach((file) => {
    const fileExtension = path.extname(file).toLowerCase();
    if (images.includes(fileExtension)) {
      const sourcePath = path.join(source, file);
      const destinationPath = path.join(imageFolder, file);
      
      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error('Error moving file:', err);
        } else {
          console.log(`File "${file}" moved successfully!`);
        }
      });
    }
  });
});
