



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
  return '';
  }
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license `${licenseLink}`) {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '[https://opensource.org/licenses/MIT]';
    case 'Apache':
      return '[https://opensource.org/licenses/Apache-2.0]';
    // Add more cases for other license types
    default:
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT ) page for details.';
    case 'Apache':
      return 'This project is licensed under the Apache License 2.0 - see the [LICENSE](https://opensource.org/licenses/Apache-2.0) page for details.';
    // Add more cases for other license types
    default:
      return '';
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  ${installCheck(data.install)}
  * [Usage](#usage)
  * [License](#license)
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.install)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: [${data.githubUsername}](${data.gitLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions