// TODO: Include packages needed for this application
// const { writeFile, copyFile } =  './Develop/utils/generateFile.js';
const inquirer = require('inquirer');
// const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
//description, table of contents, installation, usage, license, contributing, tests, questions
    {
      type: 'input',
      message: 'Describe your project. What is the purpose of it and what world problem does it solve?',
      name: 'description',
    },
    {
      type: 'list',
      message: 'Write the table of contents you wish to have in your README for your viewers',
      name: 'tableOfContents',
      choices: ['Introduction', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Identify the packages the user must install for application to run properly'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should users use your application?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to use for your application?',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'List sources that contributed to your application'
    },
  ])
  .then((response) => {
response.confirm === response.password
  ? console.log('Success!')
  : console.log('Please answer questions!')
  })

  // const markdownContent = generateMarkdown(data);

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README:', err);
        } else {
            console.log('README file has been created!');
        } 
        })
};

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt();
// }

// // Function call to initialize app
// init();
