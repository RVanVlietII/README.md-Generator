// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
//description, table of contents, installation, usage, license, contributing, tests, questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Describe your project. What is the purpose of it and what world problem does it solve?',
      name: 'Description',
    },
    {
      type: 'List',
      message: 'Write the table of contents you wish to have in your README for your viewers',
      name: 'Table of Contents',
    },
    {
      type: 'List',
      message: 'Identify the packages the user must install for application to run properly',
      name: 'Installation',
    },
    {
      type: 'Input',
      message: 'sss', 
      name: 'Usage',
    },
    {
      type: 'Select',
      message: 'What license do you want to use for your application?',
      name: 'License',
    },
    {
      type: 'Input',
      message: 'List sources that contributed to your application',
      name: 'Contributers'
    }
  ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
