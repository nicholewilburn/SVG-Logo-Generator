const inquirer = require('inquirer');
const fs = require('fs');
const SvgFile = require('./generator.js');


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

    const { characters, color, shape } = data;

    const svgData = new SvgFile(
      characters,
      color,
      shape
    );

    fs.writeFile('newLogo.svg', svgData.render(), (err) =>
  err ? console.error(err) : console.log('Success!')
);

  });

}

start();
