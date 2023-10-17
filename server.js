const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

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
  .then((answers) => {

    if (answers.options === "Add a department") {
      inquirer
      .prompt([
        {
          type: 'text',
          message: 'What is the department name?',
          name: 'newDepartment'
        }        
      ])
      .then((answers) => {
        const newDepartment = answers.department_name;
        if (!newDepartment) {
          console.log("Invalid entry.")
        }
      })
    }});

