// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === `MIT`) {
  return `![License: MIT](https://img.shields.io/badge/License-MIT-green)`;
 } else if (license === `GPL`) {
  return `![License: GPL](https://img.shields.io/badge/License-GPL-blue)`;
 } else {
  return ``;
  } 
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === `GPL`) {
    return `[GPL License](https://opensource.org/licenses/GPL)`;
  } else {
    return ``;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `MIT`) {
    return `This project is licensed under the MIT License.`;
  } else if (license === `GPL`) {
    return `This project is licensed under the GPL License.`;
  } else {
    return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command: 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  ## Questions
  For any questions, you can contact me at [${data.email}](mailto:${data.email}).
  GitHub: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})
`;
}

export default generateMarkdown;
