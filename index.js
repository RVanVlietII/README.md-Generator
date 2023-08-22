// TODO: Include packages needed for this application
const generateFile =  require('./Develop/utils/generateFile.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const Questions = [

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
      message: 'Type the email you would like to '
    }

  ]


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
      return markdownContent;
  })
  .then(markdownContent => {
      // Step 2: Write the generated markdown to a file
      const fileName = 'output.md';
      writeToFile('output.md', markdownContent); // Adjust the file name as needed
  })
  .then(writeFileResponse => {
      console.log(writeFileResponse);
      // Step 3: Copy files
      return copyFile();
  })
  .then(copyFileResponse => {
      console.log(copyFileResponse);
      // All steps completed successfully
      console.log('Process completed successfully!');
  })
  .then((response) => {
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Please answer questions!')
  })
  .catch(err => {
      // Handle errors
      console.log('An error occurred:', err);
  });






      
}

// // Function call to initialize app
init();
