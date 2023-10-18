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
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    },
  ])
  .then((answers) => {
    if (answers.options == "view all departments") {
      viewDepartments();
    } else if (answers.options === "view all roles") {
      viewRoles();
    } else if (answers.options === "view all employees") {
      viewEmployees();
    } else if (answers.options === "add a department") {
      addDepartment();
    } else if (answers.options === "add a role") {
      addRole();
    } else if (answers.options === "add an employee") {
      addEmployee();
    } else if (answers.options === "update an employee role") {
      updateRole();
    } else {
      console.log("Error.");
    }
  });

  // view departments
function viewDepartments() {
  const query = "SELECT * FROM departments";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Departments:");
    console.table(results);
  });
}

// view employees
function viewEmployees() {
  const query = "SELECT * FROM employees";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Employees:");
    console.table(results);
  });
}

// view roles
function viewRoles() {
  const query = "SELECT * FROM roles";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Roles:");
    console.table(results);
  });
}

//add department
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name of the new department:',
      name: 'department_name',
    }
  ])
  .then((answers) => { 
  const query = "INSERT INTO departments (department_name) VALUES (?)";
  db.query(query, [answers.department_name], (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${answers.department_name} was added.`);
    viewDepartments();
  })
  });
}

//add role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name of the new role:',
      name: 'job_title',
    },{
      type: 'list',
      message: 'What department is this in?',
      name: 'department_name',
      choices: ['Engineering','Support','Sales','Human Resources','Operations'],
    },{
      type: 'input',
      message: 'Enter the salary of the role',
      name: 'salary',
    },
  ])
  .then((answers) => { 
  const query = "INSERT INTO roles (job_title, department_name, salary) VALUES (?, ?, ?)";
  const values = [
    answers.job_title,
    answers.department_name,
    answers.salary,
  ];
  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${answers.job_title} was added.`);
    viewRoles();
  })
  });
}

// add employee
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'New employee first name:',
      name: 'first_name',
    },{
      type: 'input',
      message: 'New employee last name:',
      name: 'last_name',
    },{
      type: 'input',
      message: 'New employee role:',
      name: 'job_title',
    },{
      type: 'list',
      message: 'What department is this in?',
      name: 'department_name',
      choices: ['Engineering','Support','Sales','Human Resources','Operations'],
    },{
      type: 'input',
      message: 'New employee manager ID:',
      name: 'manager_id',
    },{
      type: 'input',
      message: 'New employee salary:',
      name: 'salary',
    },
  ])
  .then((answers) => { 
    const query = "INSERT INTO employees (first_name, last_name, job_title, department_name, salary, manager_id) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      answers.first_name,
      answers.last_name,
      answers.job_title,
      answers.department_name,
      answers.salary,
      answers.manager_id,
    ];
  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${answers.first_name} ${answers.last_name} was added.`);
    viewEmployees();
  })
  });
}

function updateRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "Enter the employee's first name:",
        name: 'first_name',
      },
      {
        type: 'input',
        message: "Enter the employee's last name:",
        name: 'last_name',
      },
      {
        type: 'input',
        message: 'Enter the new job title:',
        name: 'new_job_title',
      },
    ])
    .then((answers) => {
      // Check if the employee exists in the database
      const selectQuery = "SELECT * FROM employees WHERE first_name = ? AND last_name = ?";
      db.query(selectQuery, [answers.first_name, answers.last_name], (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        if (results.length === 0) {
          console.log('Employee not found.');
          return;
        }

        // Update the employee's job title
        const updateQuery = "UPDATE employees SET job_title = ? WHERE first_name = ? AND last_name = ?";
        db.query(
          updateQuery,
          [answers.new_job_title, answers.first_name, answers.last_name],
          (err, results) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`Updated job title for ${answers.first_name} ${answers.last_name} to ${answers.new_job_title}.`);
            viewEmployees();
          }
        );
      });
    });
}
