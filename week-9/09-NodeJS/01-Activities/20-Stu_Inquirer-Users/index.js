const inquirer = require("inquirer");
const fs = require("fs")

inquirer.prompt([{
    type: 'input',
    message: 'what is your name',
    name: 'name',
},
{
    type: 'input',
    message: 'what languages do you know?',
    name: 'lang',
},
{
    type: 'input',
    message: 'what is your preferred method of communication?',
    name: 'comms',
}])
.then((response)=>{
    fs.writeFile('responses.txt', `${response.name}, ${response.lang}, ${response.comms}`, (error)=>{
        error ? console.error(error) : console.log("Successful write!")
    })
})
