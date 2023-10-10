const fs = require('fs');


function generateFile(filePath, content) {
    fs.writeFile('./README.md-generator/created/README.md', content, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File has been created:', filePath);
      }
    });
  }
module.exports = generateFile;