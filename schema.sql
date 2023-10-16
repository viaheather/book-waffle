DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids --
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
  INDEX (department_name)
);

-- WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role -- 
CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  INDEX (job_title),
  FOREIGN KEY (department_name) REFERENCES departments(department_name)
);

-- WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to --
CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (department_name) REFERENCES departments(department_name),
  FOREIGN KEY (job_title) REFERENCES roles(job_title),
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)  
);
