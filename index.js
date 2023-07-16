const inquirer = require('inquirer');
const generator = require('./generator.js');


function start() {

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What letters? (Up to 3 characters)',
      name: 'characters',
    },
    {
      type: 'input',
      message: 'What color? (Color keyword or hexadecimal number)',
      name: 'color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape?',
        choices: ['circle','triangle','square'],
    },
  ])
  .then((data) => {
    console.log(data);

    const { characters, color, shape } = data;
    console.log(data);

    generator();

  });

}

start();
