const inquirer = require('inquirer');
const fs = require('fs');

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role //
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do?',
      name: 'options',
      choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee role'],
    },
  ])