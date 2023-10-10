// TODO: Include packages needed for this application
const fs = require('fs');
const generateFile =  require('./Develop/utils/generateFile.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const Questions = [

    {
      type: 'input',
      message: 'Describe your project. What is the purpose of it and what world problem does it solve?',
      name: 'description',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Describe your project for your audience');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      message: 'Write the table of contents you wish to have in your README for your viewers',
      name: 'tableOfContents',
      choices: [
      '* [Description](#description)\n',
      '* [Installation](#installation)\n', 
      '* [Usage](#usage)\n', 
      '* [License](#license)\n',
      '* [Contributors](#contributors)\n',
      '* [Tests](#tests)\n',
      '* [Questions](#questions)\n',
      ],
      filter: (choices) => choices.map(choice => `  ${choice}`).join('\n'),
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Identify the packages the user must install for application to run properly',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Enter instructions for installation')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should users use your application?',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Type input instructions for testing App',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to use for your application?',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
      type: 'input',
      name: 'contributer',
      message: 'List source (GitHub Link) that contributed to your application',
      validate: contributerInput => {
        if (contributerInput) {
          return true;
        } else {
          console.log('Enter source of contribution by GitHub Link');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github', 
      message: 'Enter your GitHub username?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Type GitHub Username');
        }
        }
    },
    {
      type: 'input',
      name: 'gitLink',
      message: 'Enter your GitHub profile Link',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Enter your GitHub link');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Type the email you would like to be contacted at?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Enter email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Type name of the repo for the README',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Enter your project name');
          return false;
        }
      }
    },

  ];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README:', err);
        } else {
            console.log('README file has been created!');
        } 
        })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(Questions)
    .then(data => {
      // Step 1: Process user input and generate markdown content
      const markdownContent = generateMarkdown(data);
      return markdownContent.split('\n').join('\n');
  })
  .then(markdownContent => {
      // Step 2: Write the generated markdown to a file
      const folderPath = './created/';
      const fileName = `${folderPath}README.md`;
      writeToFile(fileName, markdownContent); // Adjust the file name as needed
  })
  // .then(() => {
  //   console.log('Process completed!');
  // })
  .then(writeFileResponse => {
      console.log(writeFileResponse);
      // // Step 3: Copy files
      // return copyFile();
  })
  // .then(copyFileResponse => {
  //     console.log(copyFileResponse);
  //     // All steps completed successfully
  // })
  // .then((response) => {
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('Please answer questions!')
  // })
  .catch(err => {
      // Handle errors
      console.log('An error occurred:', err);
  });   
}

// // Function call to initialize app
init();
