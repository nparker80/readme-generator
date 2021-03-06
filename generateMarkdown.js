const fs = require("fs");

// / TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return "https://lbesson.mit-license.org/"
  }

  if (license === "Mozilla") {
    return "https://www.mozilla.org/en-US/MPL/2.0/"
  }

  if (license === "Apache") {
    return "https://www.apache.org/licenses/LICENSE-2.0.txt"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License
    This project is covered by the ${license} license. 
    Click the license button at the top of this file to learn more.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Questions about this project? <br/>
  GitHub: https://github.com/${data.gitHub} <br/>
  Email: ${data.email} 

  ## Credits
  ${data.name}`;
}

module.exports = generateMarkdown;
