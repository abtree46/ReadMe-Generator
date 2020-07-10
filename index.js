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
    //   {
    //     type: "input",
    //     name: "license",
    //     message: "Which license?"
    //   },
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
        message: "Any questions or concerns?"
      },
  ]);
}

function generateMarkdown(answers) {
  return `
  #  ${answers.title}


${answers.description}
----

### Table of Contents

 
 ${answers.contents}

----
### Preferred Installation

${answers.install}

----
### Usage

${answers.usage}

----
### Contributors
${answers.contributors}

----
### Tests
${}

---
### FAQ
questions

*licensing*

license`;
}

promptUser()
  .then(function(answers) {
    const md = generateMarkdown(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
