function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  };
  
  return badges[license] || '';
}

function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };
  
  return links[license] || '';
}

function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  
  return `## License

This project is licensed under the ${license} License - see [${license}](${renderLicenseLink(license)}) for details.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${data.license && data.license !== 'None' ? '- [License](#license)' : ''}
- [credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Credits

${data.credits}

## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

For questions or concerns, please contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
