const fs = require('fs');


// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./Develop/created', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
        
//         resolve({
//             ok: true,
//             message: 'Your new README.md file is now available!'
//         });
//         });
//     });
// };


function generateFile(filePath, content) {
    fs.writeFile('./README.md-generator/created/newREADME.md', content, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File has been created:', filePath);
      }
    });
  }
module.exports = generateFile;