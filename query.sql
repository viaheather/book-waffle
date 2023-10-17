INSERT INTO employees (first_name, last_name, job_title, department_name, salary, manager_id)
SELECT
    "Jennifer", "Bui", roles.job_title, departments.department_name, 200000, NULL
FROM roles
JOIN departments ON roles.department_name = departments.department_name
WHERE roles.job_title = "VP of Engineering";