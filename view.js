const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('console-table-printer')
const {model} = require('./model')


function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                font: 'isometric2'
            }
        )
    )
}
//console.log(getTitle())

function getTable(model){
    return [
        {'Bill Amount': model.amount,'Tip(%)': model.tipp,'Tip': model.tip ,'Total': model.total}
    ]
}

//printTable(getTable())

function inputForm(model){
    //const {input} = model
    const message = 'Bill Amount?'
    const message2 = 'Tip Percentage?'
    return inquirer.prompt([
        {
            name: 'amount',
            type: 'input',
            message: message,
            default: model.amount,
        },

        {   name: 'tipp',
            type: 'input',
            message: message2,
            default: model.tipp,
        }
    ])
}

//code from classes, not edited yet
/*function listForm(model){
    const {input} = model
    const message = 'Increase or decrease?'
    const choices = ['+', '-']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}*/

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
    //listForm
}