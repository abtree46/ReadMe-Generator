const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
     {
        type: "input",
        name: "description",
        message: "What is your project's description?"
      },
      {
        type: "input",
        name: "contents",
        message: "What is your project's table of contents?"
      },
      {
        type: "input",
        name: "install",
        message: "Installation process?"
      },
      {
        type: "input",
        name: "usage",
        message: "How is it intened to be used?"
      },
      {
        type: "input",
        name: "license",
        message: "Which license?"
      },
    {
        type: "input",
        name: "contributors",
        message: "Who/what all contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Any tests to be run?"
      },
      {
        type: "input",
        name: "questions",
        message: "GitHub username?"
      },
  ]);
}

function generateMarkdown(response) {
  return `
  #  ${response.title}


${response.description}
----

### Table of Contents

 
 ${response.contents}

----
### Preferred Installation

${response.install}

----
### Usage

${response.usage}

----
### Contributing
${response.contributors}

----
### Tests
${response.tests}

---
### FAQ
[${response.questions}] (https://github.com/${response.questions})


*licensing*

${response.license}`;
}

promptUser()
  .then(function(response) {
    const md = generateMarkdown(response);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
