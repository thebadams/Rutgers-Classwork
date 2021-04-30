const inquirer = require('inquirer');
const top5000 = require('./top5000')


const start = ()=>{
    inquirer.prompt({
        name: 'userChoice',
        type: 'list',
        choices: ['Select All Data', 'Select Song', 'Select Range', 'Select Artist More Than Once']
    })
}

start()