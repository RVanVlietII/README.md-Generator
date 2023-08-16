const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((res, rej) => {
        fs.writeFile('./develop/README.md', fileContent, err => {
            if (err) {
                rejects(err);
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