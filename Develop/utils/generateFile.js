const fs = require('fs');
// const questions = require('./Class/Week-9/README.md-Generator/index.js');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./Develop/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
        
        resolve({
            ok: true,
            message: 'Your new README.md file is now available!'
        });
        });
    });
};

module.exports = { writeFile };