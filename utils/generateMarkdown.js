// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg"/>`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [Licence](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    
    This project is licensed under ${license}.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data, "from markdown");
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  ${data.description}

  Table Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.Installation}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ${renderLicenseSection(data.license)}

  ## Contact
  - [Github](https://github.com/${data.Github})
  - [email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
