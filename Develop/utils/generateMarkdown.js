
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if(!license) {
  return '';
  }
  switch (license) {
    case 'MIT':
      return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    // `${licenseLink}`
    return '';
  }
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) page for details.';
    case 'Apache':
      return 'This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) page for details.';
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
const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
}
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributors 
  ${contributeText}
  `
  }
}
const generateTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Tests
  ${testText}
  `
  }
}
const installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Table Of Contents](#tableOfContents)`
  }
}
const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
}
const testCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Testing](#testing)`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  const licenseBadge = renderLicenseBadge(data.license);
  return `${licenseBadge}\n#
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ${generateInstall(data.installation)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license. ${renderLicenseLink(data.license)} 
  ${generateContribute(data.contributer)}
  ${generateTesting(data.tests)}
  ## Questions
  Created by: [${data.github}](${data.gitLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions